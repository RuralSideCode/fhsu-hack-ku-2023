import { createSlice } from '@reduxjs/toolkit'
export const codeNumberSlice = createSlice({
    name: 'codenumber',
    initialState: {
        count: 1,
    },
    reducers: {
        setCount: (state) => {
            state.count += 1;
        }
    }
});

export default codeNumberSlice.reducer;