import React from 'react';
import DailyWeatherCard from './DailyWeatherCard';

function RightSide({ dailyData }) {
  // Extract the relevant arrays from dailyData
  const { time, temperature_2m_max, temperature_2m_min, uv_index_max, wind_speed_10m_max } = dailyData;

  // Skip today's data (index 0) and take the next 6 days
  const futureData = time.slice(1, 7).map((date, index) => ({
    time: date,
    date: getDayOfWeek(date),
    temperatureMax: temperature_2m_max[index + 1],
    temperatureMin: temperature_2m_min[index + 1],
    uvIndexMax: uv_index_max[index + 1],
    windSpeed: wind_speed_10m_max[index + 1],
  }));

  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {futureData.map((data, index) => (
        <DailyWeatherCard
          key={index}
          time={data.time}
          date={data.date}
          temperatureMax={data.temperatureMax}
          temperatureMin={data.temperatureMin}
          uvIndexMax={data.uvIndexMax}
          windSpeed={data.windSpeed}
        />
      ))}
    </div>
  );
}

export default RightSide;
