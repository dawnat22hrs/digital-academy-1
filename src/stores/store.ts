import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as recipesReducer,} from "./recipes/recipes.slice.ts";
import {reducer as postsReducer, } from "./posts/posts.slice.ts"
import {api} from "../api/api.ts";

const reducers = combineReducers({
    recipes: recipesReducer,
    posts: postsReducer,
    [api.reducerPath]: api.reducer
})
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})