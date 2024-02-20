import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipes: (state, action) => {
            const recipes = action.payload
            state.push(recipes)
        }
    }
})

export const {actions, reducer} = recipesSlice