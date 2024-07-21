import React from 'react'


function LeftSide({ currentData, searchedCity }) {
  return (
    <div className='flex flex-col w-full h-full items-center justify-around p-2'>

      <div className='flex flex-col items-center justify-around w-full'>
      <pre className='text-2xl tracking-wider' >
        {searchedCity ? searchedCity : (<div>Current Location</div>)}
      </pre>
      <pre className='text-2xl tracking-wider bg-white text-black w-[85%] text-center' >
        TODAY
      </pre>
      </div>

      <div className='flex items-center justify-center text-[80px] font-bold'>
        <pre className='text-[85px] tracking-widest'> {currentData?.temperature_2m}</pre>
        <sup>o</sup>
        <pre>C</pre>
      </div>

      <div className='flex items-center justify-around w-full'>

        <div className="right flex flex-col items-center justify-center text-xl gap-2">
          <pre>Humidity <i class="fa-solid fa-droplet"></i> : {currentData?.relative_humidity_2m} %</pre>
          <pre>Precipitation <i class="fa-solid fa-cloud-sun-rain"></i> : {currentData?.precipitation} mm</pre>
          <pre>Rain <i class="fa-solid fa-cloud-rain"></i> : {currentData?.rain} mm</pre>
          <pre>Cloud Cover <i class="fa-solid fa-cloud-sun"></i> : {currentData?.cloud_cover} %</pre>
          <pre>Surface Pressure <i class="fa-solid fa-toilet"></i> : {currentData?.surface_pressure} hPa</pre>
          <pre>Wind Speed <i class="fa-solid fa-wind"></i> : {currentData?.wind_speed_10m} km/h</pre>
        </div>

      </div>


    </div>
  )
}

export default LeftSide