import React, { FormEvent } from 'react'

const Form = () => {
    const REQUEST_URL = 'http://api.openweathermap.org';

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = await getWeatherData(event.target[0].value);
        console.log('data', data)
    };

    const getLocationData = async (city: string) => {
        const response = await fetch(`${REQUEST_URL}/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_ACCESS_KEY}`);
        const data = await response.json();
        return data[0];
    };

    const getWeatherData = async (city: string) => {
        const { lon, lat }: { lon: number; lat: number } = await getLocationData(city);
        const response = await fetch(`${REQUEST_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_APP_ACCESS_KEY}`);

        return await response.json();
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded p-6 shadow-md">
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