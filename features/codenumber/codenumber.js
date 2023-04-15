import { createSlice } from '@reduxjs/toolkit'
export const codeNumberSlice = createSlice({
    name: 'codenumber',
    initialState: {
        count: 1,
    },
    reducers: {
        increase: (state) => {
            state.count += 1;
        },
        decrease: (state) => {
            state.count -= 1;
        }
    }
});

export default codeNumberSlice.reducer;