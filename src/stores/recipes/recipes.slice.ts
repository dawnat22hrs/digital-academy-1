import {createSlice} from "@reduxjs/toolkit"

interface IState {

}

const initialState: IState[] = []

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipes: (state, action) => {
            state.push(action.payload)
            console.log(action.payload)
        }
    }
})

export const {actions, reducer} = recipesSlice