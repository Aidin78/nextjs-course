import classes from './page.module.css'
import Link from 'next/link'
import { Suspense } from 'react'

import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '@/lib/meals'

export const metadata = {
    title: "All Meals", 
    description : "All Meals are here for you to explore"
}

async function Meals() {
    const meals = await getMeals();

    return (<MealsGrid meals={meals} />)
}

//if we are getting data from the backend the right approach is to add async here
export default function mealsPage() {


    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals ...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

//By default are SVC(server components) => so directly connect to database