import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './components/weatherSlice'

export default configureStore({
    reducer: {
        weather: weatherSlice
    }
});