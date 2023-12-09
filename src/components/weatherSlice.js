import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
    },
    reducers: {
        setWeather: (state, { payload }) => {
            state.weather = payload
        },
    }
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer