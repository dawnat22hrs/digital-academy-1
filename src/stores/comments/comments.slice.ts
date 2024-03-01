import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentsState {
    currentComments: any[]
}

const initialState: CommentsState = {
    currentComments: []
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        defineComments: (state, action: PayloadAction<any[]>) => {
            state.currentComments = action.payload
        },
        pushComment: (state, action: PayloadAction<any>) => {
            state.currentComments.push(action.payload)
        }
        
    }
})

export const {actions, reducer} = commentsSlice