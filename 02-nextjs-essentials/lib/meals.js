import fs from 'node:fs'

import sql from 'better-sqlite3';
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db'); // connect to database 

export async function getMeals() {

    await new Promise((resolve) => setTimeout(resolve, 2000)); //wait for 2s

    //If you want to get all the rows you must use all
    //If you want to get a unique row you should use get 
    return db.prepare('Select * from meals').all();
}

export function getMeal(slug) {
    return db.prepare('Select * from meals where slug = ?').get(slug);
    // Opens to Xss attack
    //return db.prepare('Select * from meals where slug = ' + slug).get(); 
}

export async function saveMeal(meal) {
    const baseSlug = slugify(meal.title, { lower: true });
    let slug = baseSlug;
    let suffix = 2;

    while (db.prepare('SELECT 1 FROM meals WHERE slug = ?').get(slug)) {
        slug = `${baseSlug}-${suffix}`;
        suffix += 1;
    }

    meal.slug = slug;
    meal.instructions = xss(meal.instructions);

    // we do not save files in databases
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`
    //create a stream that helps us to write to a file
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) throw new Error("Saving Image failed")
    })

    meal.image = `/images/${fileName}`;

    db.prepare(`
        Insert into meals(title, summary, instructions, image, slug, creator, creator_email)
        Values(
            @title, 
            @summary, 
            @instructions, 
            @image, 
            @slug, 
            @creator, 
            @creator_email
        )
        `).run(meal);
}
