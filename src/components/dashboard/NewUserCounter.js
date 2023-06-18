import React from 'react'

const NewUserCounter = () => {
  return (
    <div className="py-3 px-5 rounded-md border border-purple-1 h-full relative overflow-hidden text-black">
        <h1 className='z-10'>New Users</h1>
        <h1 className='text-5xl font-extrabold z-10'>10</h1>

        <div className="flex items-center text-green z-30 pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-1 z-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
          <p className="text-sm z-10">33% this month</p>
        </div>
        
        <div className="absolute -bottom-5 -right-3 text-purple-2">
          <h1 className="text-9xl font-extrabold">10</h1>
        </div>
    </div>
  )
}

export default NewUserCounter