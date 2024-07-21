import React from 'react'

function Header({ city, setCity, onSearch }) {

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log("enter");
            onSearch();
        }
    }

    return (
        <div className='w-full items-center justify-around flex p-2'>

            <div className="logo flex items-center justify-center">
                <img src="/src/assets/logo.png" alt="Logo" className='w-[3rem]' />
                <div className='border-r-[1px]  mx-3 h-[2rem] border-gray-500' />
                <pre className='font-extrabold text-2xl'>WEATHERYZE</pre>
            </div>

            <div className='search flex items-center justify-center'>
                <input type="text"
                    value={city}
                    placeholder='Search City ....'
                    onChange={(e) =>  setCity(e.target.value) }
                    onKeyDown={handleSearch}
                    autoComplete='off'
                    className='bg-gray-600 rounded-xl py-2 outline-none border-none w-[30rem] px-2 text-l font-thin'
                />
                <button className='bg-gray-600 hover:bg-slate-700 mx-2 w-20 rounded-xl py-2 font-bold '
                onClick={() => onSearch() }>
                    Search
                </button>
            </div>

        </div>
    )
}

export default Header