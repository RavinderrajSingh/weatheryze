import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function DisplayWeatherData({ currentData, dailyData, weatherData, searchedCity }) {
    return (
        <div className='w-full flex flex-col md:flex-row items-center justify-between p-4'>
            <div className='w-full md:w-1/4 bg-gray-900 rounded-2xl mb-4 md:mb-0'>
                <LeftSide currentData={currentData} searchedCity={searchedCity} />
            </div>

            <div className='w-full md:w-3/4'>
                <RightSide dailyData={dailyData} searchedCity={searchedCity} />
            </div>
        </div>
    );
}

export default DisplayWeatherData;
