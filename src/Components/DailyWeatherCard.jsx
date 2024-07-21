import React from 'react'

function DailyWeatherCard({ time, date , temperatureMax, temperatureMin, uvIndexMax, windSpeed }) {
    return (
        <div className='flex flex-col px-2 rounded-2xl h-full items-center justify-around bg-gray-800'>

            <div className='flex flex-col items-center justify-center w-full gap-2'>
                <pre className='text-2xl tracking-wider bg-white text-black w-full text-center' >
                    {time}
                </pre>

                <pre className='text-2xl tracking-wider bg-white text-black w-full text-center' >
                    {date}
                </pre>
            </div>

            <div className='flex flex-col gap-3 items-center justify-center'>
                <div>
                    <img src="/src/assets/sun.png" alt="" className='w-[4rem]' />
                </div>

                <div>
                    <div className='flex items-center justify-center text-xl font-bold'>
                        <pre className=' tracking-widest'> Max : {temperatureMax}</pre>
                        <sup>o</sup>
                        <pre>C</pre>
                    </div>

                    <div className='flex items-center justify-center text-xl font-bold'>
                        <pre className=' tracking-widest'> Min : {temperatureMin}</pre>
                        <sup>o</sup>
                        <pre>C</pre>
                    </div>
                </div>

            </div>

            <div>
                <div className='flex items-center justify-center text-xl font-bold'>
                    <pre className=' tracking-widest'> UV index : {uvIndexMax}</pre>
                </div>
                <div className='flex items-center justify-center text-xl font-bold'>
                    <pre className=' tracking-widest'> Wind Speed : {windSpeed}</pre>
                </div>
            </div>



        </div>
    )
}

export default DailyWeatherCard
