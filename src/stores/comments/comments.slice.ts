import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentComments: []
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        defineComments: (state, action) => {
            state.currentComments = action.payload
        },
        pushComment: (state, action) => {
            state.currentComments.push(action.payload)
        }
        
    }
})

export const {actions, reducer} = commentsSlice