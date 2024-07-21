import React from 'react'
import useCityCoordinates from './Hooks/useCityCoordinates'
import useCurrentLocation from './Hooks/useCurrentLocation';
import { useEffect, useState } from 'react';
import useWeatherData from './Hooks/useWeatherData';
import Body from './Components/Body';

function App() {

  const [city, setCity] = React.useState('');
  const [searchedCity, setSearchedCity] = React.useState();
  const { lat, lon, fetchCoordinates, cityCoordsLoading } = useCityCoordinates();
  const { currentCoords, CheckPremissions, getLocation, isCheckingPermission, isPermissionGranted } = useCurrentLocation();
  const [finalLatLon, setFinalLatLon] = useState({ lat: null, lon: null });
  const [searched, setSearched] = useState(false);
  const { currentData, dailyData, data, loading } = useWeatherData(finalLatLon.lat, finalLatLon.lon, 'GMT');


  //  it check and get user location permission
  useEffect(() => {
    getLocation();
    CheckPremissions();

  }, [getLocation, CheckPremissions]);


  // it check weather to use curent location for coordinates or user searched locationn
  useEffect(() => {
    if (searched && searchedCity && lat != null && lon != null) {
      setFinalLatLon({ lat, lon });
    } else if (!searched && !searchedCity && currentCoords && currentCoords.lat && currentCoords.lon) {
      setFinalLatLon({ lat: currentCoords.lat, lon: currentCoords.lon });
    } else setFinalLatLon({ lat: currentCoords.lat, lon: currentCoords.lon });

  }, [cityCoordsLoading, searched, lat, lon, currentCoords]);



  // it fetch coordinates when user press search for given location
  const fetchCoordData = () => {
    if (city) {
      setSearchedCity(city);
      setSearched(true);
      fetchCoordinates(city);
    } else {
      setSearchedCity('');
      setSearched(false);
      setFinalLatLon({ lat: currentCoords.lat, lon: currentCoords.lon });
      alert('please enter a city');
    }


  }

  return (
    <div className='flex items-center justify-center w-full h-screen'>

      <Body
        currentData={currentData}
        dailyData={dailyData}
        isPermissionGranted={isPermissionGranted}
        isCheckingPermission={isCheckingPermission}
        cityCoordsLoading={cityCoordsLoading}
        weatherData={data}
        city={city}
        searchedCity={searchedCity}
        setCity={setCity}
        setSearchedCity={setSearchedCity}
        checkPermissions={CheckPremissions}
        getLocation={getLocation}
        weatherLoading={loading}
        onSearch={fetchCoordData}
      />

    </div>
  )
}

export default App