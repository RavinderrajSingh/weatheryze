import React from 'react'

function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-gray-500"></div>
            </div>
        </div>
    );
}

export default Loading