import React from 'react'

function LeftSide({ currentData, searchedCity }) {
  return (
    <div className='flex flex-col w-full h-full items-center justify-around'>

      <pre className='text-2xl tracking-wider' >
        {searchedCity ? searchedCity : (<div>Current Location</div>)}
      </pre>

      <div className='flex items-center justify-center text-[80px] font-bold'>
        <pre className='text-[85px] tracking-widest'> {currentData?.temperature_2m}</pre>
        <sup>o</sup>
        <pre>C</pre>
      </div>

      <div className='flex items-center justify-around w-full'>

        <div className="right flex flex-col items-center justify-center text-xl gap-2">
          <pre>Humidity : {currentData?.relative_humidity_2m} %</pre>
          <pre>Precipitation : {currentData?.precipitation} mm</pre>
          <pre>Rain : {currentData?.rain} mm</pre>
          <pre>Cloud Cover : {currentData?.cloud_cover} %</pre>
          <pre>Surface Pressure : {currentData?.surface_pressure} hPa</pre>
          <pre>Wind Speed : {currentData?.wind_speed_10m} km/h</pre>
        </div>

      </div>


    </div>
  )
}

export default LeftSide