import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const weather = useSelector((state: any) => state.weather);
    const [temperature, setTemperature] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');

    useEffect(() => {
        setKelvinToCelsius(Number(weather?.weather?.main?.temp || 273.15));
        setWeatherIcon(weather?.weather?.weather?.[0].icon || '');
        setWeatherDescription(weather?.weather?.weather?.[0].description || '');
    }, [weather]);


    const setKelvinToCelsius = (kelvin: number) => {
        const celsius = kelvin - 273.15;

        setTemperature(Math.round(celsius * 100) / 100);
    }

    return (
        <div className="max-w-sm mx-auto bg-white rounded p-6 shadow-md mt-5 w-full">
            <div className='flex justify-between'>
                <p className='city-name'>City: </p>
                <p className='city-value'>{weather.weather?.name}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='weather-desc'>Weather: </p>
                <div className='flex items-center justify-center'>
                    <img src={weatherIcon ? `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` : ''} alt={weatherDescription} />
                    <p className='weather-value'>{temperature}</p>
                    <p className='weather-value'>°C</p>
                </div>
            </div>
            <p className='weather-icon capitalize'>{weatherDescription}</p>
        </div>
    )
}

export default Result