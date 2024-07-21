import React from 'react'
import DailyWeatherCard from './DailyWeatherCard'

function RightSide({ dailyData, searchedCity }) {

  // Extract the relevant arrays from dailyData
  const { time, temperature_2m_max, temperature_2m_min, uv_index_max, wind_speed_10m_max } = dailyData;

  // Skip today's data (index 0) and take the next 6 days
  const futureData = time.slice(1, 7);

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
  }


  return (
    <div className='flex w-full h-full item-center justify-evenly'>

      {/* display 6 dailyweathercards based on dailydata card for today will not be displayed i wil do it in my left section the rest of day will start after today and next 6 day will be displayed here dailyWeathercard has some props that will bee pased from dailyData*/}
      {futureData.map((day, index) => (
        <DailyWeatherCard
          key={index}
          time={getDayOfWeek(day)}
          date={day}
          temperatureMax={temperature_2m_max[index + 1]} // +1 because we are skipping the first day
          temperatureMin={temperature_2m_min[index + 1]}
          uvIndexMax={uv_index_max[index + 1]}
          windSpeed={wind_speed_10m_max[index + 1]}
        />
      ))}


    </div>
  )
}

export default RightSide

