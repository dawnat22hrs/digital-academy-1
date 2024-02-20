import {CATEGORY_VARIANT} from "../atoms/categoryChip";
import {COMMENTS_VARIANT} from "../molecules/CarouselItem";

export interface ICarouselItem {
    body: string,
    id: number,
    postId: number,
    user: {
        id: number,
        username: string,
    },
    variant?: COMMENTS_VARIANT,
}

export interface IRecipesCard {
    caloriesPerServing?: number,
    cookTimeMinutes?: number,
    cuisine?: string,
    difficulty?: string,
    id?: number,
    image?: string,
    ingredients?: string[],
    instructions?: string[],
    mealType?: string[],
    name?: string,
    prepTimeMinutes?: number,
    rating?: number,
    reviewCount?: number,
    servings?: number,
    tags?: string[],
    userId?: number,
    categoryChip?: CATEGORY_VARIANT | null,
}

export interface IPostItem {
    body: string,
    id: number,
    reactions: number
    tags: string[],
    title: string,
    userId: number,
}