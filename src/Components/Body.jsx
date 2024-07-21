import React from 'react';
import Loading from './Loading';
import PermissionRevoked from './PermissionRevoked';
import Header from './Header';
import DisplayWeatherData from './DisplayWeatherData';

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
    return <Loading />;
  }

  if (!isPermissionGranted) {
    return (
      <PermissionRevoked
        getLocation={getLocation}
        isPermissionGranted={isPermissionGranted}
        checkPermissions={checkPermissions}
      />
    );
  }

  return (
    <div className='flex flex-col items-center min-h-screen w-full'>
      <div className='flex w-full'>
        <Header city={city} setCity={setCity} onSearch={onSearch} />
      </div>

      <div className="mainSection w-full flex-grow flex items-center justify-center px-4 py-2 md:py-4">
        {weatherLoading ? (
          <Loading />
        ) : weatherData ? (
          <DisplayWeatherData
            currentData={currentData}
            dailyData={dailyData}
            weatherData={weatherData}
            searchedCity={searchedCity}
          />
        ) : (
          <div className='text-center text-xl md:text-2xl'>No Weather Data Available</div>
        )}
      </div>
    </div>
  );
}

export default Body;
