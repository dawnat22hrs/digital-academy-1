import {createSlice} from "@reduxjs/toolkit";
import {CONTROL_PAGE} from "../../types/enums.ts";

const initialState = {
    currentPage: 1,
    perPage: 12,
    totalPage: 0,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        controlTable: (state, action) => {
            switch (action.payload) {
                case CONTROL_PAGE.NEXT:
                    state.currentPage += 1
                    break

                case CONTROL_PAGE.PREV:
                    state.currentPage -= 1
            }
        },
        installTotalPage: (state, action) => {
            state.totalPage = action.payload
        }
    }
})

export const {actions, reducer} = postsSlice