import React from 'react'
import Loading from './Loading'
import PermissionRevoked from './PermissionRevoked'
import Header from './Header'
import LeftSide from './LeftSide'
import RightSide from './RightSide';
import DisplayWeatherData from './DisplayWeatherData'

function Body({
  currentData,
  dailyData,
  isPermissionGranted,
  isCheckingPermission,
  cityCoordsLoading,
  weatherData,
  city,
  setCity,
  searchedCity,
  checkPermissions,
  getLocation,
  weatherLoading,
  onSearch
}) {


  if (isCheckingPermission) {
    return (<Loading />)
  }

  if (!isPermissionGranted) {
    return (
      <PermissionRevoked
        getLocation={getLocation}
        isPermissionGranted={isPermissionGranted}
        checkPermissions={checkPermissions}
      />
    )
  }

  return (
    <div className='flex flex-col items-center h-screen w-full'>

      <div className='flex sticky top-0 w-full'>
        <Header city={city} setCity={setCity} onSearch={onSearch} />
      </div>

      <div className="mainSection w-full h-full flex items-center justify-around">
        {/* if weather data is loaded then show this else show loading screen */}
        {
          weatherLoading ? (
            <Loading />       
          ) : weatherData ? (
              <DisplayWeatherData
                currentData={currentData}
                dailyData={dailyData}
                weatherData={weatherData}
                searchedCity={searchedCity}
              />
            ) : (
                <div>No Weather Data Avialable</div>
          )
        }

      </div>

      {/* <DisplayWeatherData currentData={currentData} dailyData={dailyData} weatherData={weatherData} /> */}


    </div>
  )
}

export default Body