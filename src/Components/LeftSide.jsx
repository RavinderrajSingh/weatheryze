import React from 'react';

function LeftSide({ currentData, searchedCity }) {
  return (
    <div className='flex flex-col items-center p-4'>
      <div className='text-lg md:text-xl mb-2'>
        {searchedCity ? searchedCity.toUpperCase() : 'Current Location'}
      </div>
      <div className='text-lg md:text-xl mb-4'>TODAY</div>

      <div className='text-4xl md:text-5xl font-bold mb-4'>
        {currentData?.temperature_2m}<sup>o</sup>C
      </div>

      <div className='text-sm md:text-base'>
        <div>Humidity: {currentData?.relative_humidity_2m}%</div>
        <div>Precipitation: {currentData?.precipitation} mm</div>
        <div>Rain: {currentData?.rain} mm</div>
        <div>Cloud Cover: {currentData?.cloud_cover}%</div>
        <div>Surface Pressure: {currentData?.surface_pressure} hPa</div>
        <div>Wind Speed: {currentData?.wind_speed_10m} km/h</div>
      </div>
    </div>
  );
}

export default LeftSide;
