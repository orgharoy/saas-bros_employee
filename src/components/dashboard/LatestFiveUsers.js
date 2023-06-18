import React from 'react'

const LatestFiveUsers = () => {
  return (
    <div className="py-3 px-5 rounded-md h-full border border-purple-400 text-purple-600">
        <div className="flex items-center border-b border-purple-200 py-1">
            <div className="rounded-full bg-pink-400 h-5 w-5">
            </div>
            <p className="ml-2">Magical Business 1</p>
        </div>
        <div className="flex items-center border-b border-purple-200 py-1">
            <div className="rounded-full bg-green-700 h-5 w-5">
            </div>
            <p className="ml-2">Magical Business 2</p>
        </div>
        <div className="flex items-center border-b border-purple-200 py-1">
            <div className="rounded-full bg-teal-700 h-5 w-5">
            </div>
            <p className="ml-2">Magical Business 3</p>
        </div>
        <div className="flex items-center border-b border-purple-200 py-1">
            <div className="rounded-full bg-indigo-800 h-5 w-5">
            </div>
            <p className="ml-2">Magical Business 4</p>
        </div>
        <div className="flex items-center border-b border-purple-200 py-1">
            <div className="rounded-full bg-black h-5 w-5">
            </div>
            <p className="ml-2">Magical Business 5</p>
        </div>
    </div>
  )
}

export default LatestFiveUsers