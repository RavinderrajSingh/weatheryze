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
        <pre>Humidity <i class="fa-solid fa-droplet"></i> : {currentData?.relative_humidity_2m}%</pre>
        <pre>Precipitation: {currentData?.precipitation} mm</pre>
        <pre>Rain <i class="fa-solid fa-cloud-rain"></i> : {currentData?.rain} mm</pre>
        <pre>Cloud Cover <i class="fa-solid fa-cloud-sun"></i> : {currentData?.cloud_cover}%</pre>
        <pre>Surface Pressure <i class="fa-solid fa-gauge"></i> : {currentData?.surface_pressure} hPa</pre>
        <pre>Wind Speed <i class="fa-thin fa-wind"></i> : {currentData?.wind_speed_10m} km/h</pre>
      </div>
    </div>
  );
}

export default LeftSide;
