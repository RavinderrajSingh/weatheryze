import React from 'react';
import sun from '/src/assets/sun.png';

function DailyWeatherCard({ time, date, temperatureMax, temperatureMin, uvIndexMax, windSpeed }) {
    return (
        <div className='flex flex-col p-4 rounded-2xl bg-gray-800 text-white max-w-xs mx-2 mb-4 md:max-w-sm md:mb-6'>
            <div className='flex flex-col items-center mb-4'>
                <div className='text-lg md:text-2xl text-center'>{time}</div>
                <div className='text-lg md:text-2xl text-center'>{date}</div>
            </div>

            <div className='flex flex-col items-center mb-4'>
                <img src={sun} alt="Sun" className='w-16 md:w-24' />
                <div className='text-sm md:text-lg'>
                    <div className='flex items-center justify-center'>
                        <span className='font-bold'>Max: {temperatureMax}<sup>o</sup>C</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <span className='font-bold'>Min: {temperatureMin}<sup>o</sup>C</span>
                    </div>
                </div>
            </div>

            <div className='text-sm md:text-lg'>
                <div className='flex items-center justify-center mb-2'>
                    UV index: {uvIndexMax}
                </div>
                <div className='flex items-center justify-center'>
                    Wind Speed: {windSpeed}
                </div>
            </div>
        </div>
    );
}

export default DailyWeatherCard;
