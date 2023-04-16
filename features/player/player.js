import { createSlice } from '@reduxjs/toolkit'
export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        uuid: "",
        name: '',
        points: 0,
        socket: "",
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
        setSocket: (state, action) => {
            state.connectionId = action.payload;
        }
    }
});

export const {setUUID, setName, setPoints, setSocket} = playerSlice.actions;

export default playerSlice.reducer;