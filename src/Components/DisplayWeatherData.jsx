import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function DisplayWeatherData({ currentData, dailyData, weatherData, searchedCity }) {
    return (

        <div className='w-full h-full flex items-center justify-around'>

            <div className='w-[38%] h-[98%] bg-gray-900 rounded-2xl'>
                <LeftSide currentData={currentData} searchedCity={searchedCity}  />
            </div>

            <div className='w-[60%] h-[98%] bg-gray-900 rounded-2xl'>
                <RightSide dailyData={dailyData} searchedCity={searchedCity} />
            </div>

        </div>
    )
}

export default DisplayWeatherData