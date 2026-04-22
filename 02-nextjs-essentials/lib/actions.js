'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function ShareMeal(prevState, formData) {
    const isInvalidText = (text) => {
        if (!text || text.trim() === '')
            return true;
        return false;
    }

    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email")
    }

    //Check Validations
    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    )
        return { success: false, message: 'Invalid inputs' };

    try {
        await saveMeal(meal);
    } catch (error) {
        return {
            success: false,
            message: error?.message || 'Saving meal failed.'
        };
    }

    revalidatePath('/meals');
    redirect('/meals');
}