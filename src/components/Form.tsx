import React, { FormEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setWeather } from './weatherSlice';

const Form = () => {
    const REQUEST_URL = 'http://api.openweathermap.org';
    const dispatch = useDispatch();
    
    useEffect(() => {
        getWeatherData('London');
    }, []);
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await getWeatherData(event.target[0].value);
    };
    const getLocationData = async (city: string) => {
        const response = await fetch(`${REQUEST_URL}/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_ACCESS_KEY}`);
        const data = await response.json();

        return data[0];
    };
    const getWeatherData = async (city: string) => {
        try {
            const location = await getLocationData(city);
            const response = await fetch(`${REQUEST_URL}/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_APP_ACCESS_KEY}`);
            const weatherData = await response.json();

            dispatch(setWeather(weatherData));

            return weatherData;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded p-6 shadow-md w-full">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type city"
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="submit"
                    value="Search"
                    className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer"
                />
            </form>
        </div>
    )
}

export default Form;