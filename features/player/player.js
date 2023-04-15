import { createSlice } from '@reduxjs/toolkit'
export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        uuid: undefined,
        name: '',
        points: 0,
        connectionId: undefined,
    },
    reducers: {
        setUUID: (state, action) => {
            state.uuid = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPoints: (state, action) => {
            state.points = action.payload;
        },
        setConnectionId: (state, action) => {
            state.connectionId = action.payload;
        }
    }
});

export default playerSlice.reducer;