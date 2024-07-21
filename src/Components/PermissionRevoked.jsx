import React from 'react';

function PermissionRevoked({ checkPermissions, getLocation, isPermissionGranted }) {
    if (!isPermissionGranted) {
        checkPermissions();
        getLocation();
    }

    const GrantPermissions = () => {
        alert("YOU HAVE BLOCKED LOCATION PERMISSIONS! PLEASE CHANGE IT IN THE SETTINGS");
    };

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-4'>
            <div className='text-3xl md:text-4xl font-bold mb-4'>PLEASE GRANT LOCATION PERMISSION</div>
            <div className='text-lg md:text-xl mb-4'>We need access to your location to get weather data for your current location.</div>
            <button
                className='bg-orange-700 hover:bg-orange-900 text-white rounded-xl px-6 py-2 font-bold'
                onClick={GrantPermissions}
            >
                GRANT PERMISSION
            </button>
        </div>
    );
}

export default PermissionRevoked;
