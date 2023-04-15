import { createSlice } from '@reduxjs/toolkit'
export const problemSlice = problemSlice({
    name: 'problem',
    initialState: {
        name: 'Problem',
        desc: 'Description',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setDesc: (state, action) => {
            state.desc = action.payload;
        }
    }
})