import React from 'react';
import logo from '/src/assets/logo.png';

function Header({ city, setCity, onSearch }) {
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className='w-full flex flex-col md:flex-row items-center justify-between p-4'>
            <div className="flex items-center mb-4 md:mb-0">
                <img src={logo} alt="Logo" className='w-12 md:w-16' />
                <div className='border-r-2 mx-3 h-8 border-gray-500' />
                <span className='font-extrabold text-xl md:text-2xl'>WEATHERYZE</span>
            </div>

            <div className='flex flex-col md:flex-row items-center'>
                <input
                    type="text"
                    value={city}
                    placeholder='Search City...'
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleSearch}
                    autoComplete='off'
                    className='bg-gray-600 rounded-xl py-2 px-4 text-lg md:text-xl w-full md:w-80'
                />
                <button
                    className='bg-gray-600 hover:bg-gray-700 rounded-xl py-2 px-4 font-bold md:ml-4 mt-2 md:mt-0'
                    onClick={onSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Header;
