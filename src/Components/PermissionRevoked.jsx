import React from 'react'

function PermissionRevoked({ checkPermissions, getLocation, isPermissionGranted }) {

    if (!isPermissionGranted) {
        checkPermissions();
        getLocation();
    }

    

    function GrantPermissions() {
        alert("YOU HAVE BLOCKED LOACTION PERMISSIONS ! PLEASE CHANGE IT IN THE SETTINGS")
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>

            <pre className='text-6xl font-bold my-3'>PLEASE GRANT LOCATION PERMISSION </pre>
            <pre className='text-3xl font-mono my-3'>We need access to you location to get you weather data for your current location</pre>
            <div className='border-b-2 w-[80%] my-5' />
            <button
                className='bg-orange-700 rounded-2xl px-20 py-2 font-bold text-2xl hover:bg-orange-900'
                onClick={GrantPermissions}
            >GRANT PERMISSION</button>

        </div>
    )
}

export default PermissionRevoked