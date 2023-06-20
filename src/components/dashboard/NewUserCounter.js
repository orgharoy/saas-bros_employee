import React from 'react'

const NewUserCounter = () => {
  return (
    <div className="py-3 px-5 rounded-md border border-purple-7 h-full relative overflow-hidden text-black">
        <div className="flex items-start">
          <h1 className='relative text-7xl font-extrabold z-10 text-purple-2'>10</h1>
          <div className="flex items-center text-green relative z-30 pt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 z-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            <p className="text-md">33%</p>
          </div>
        </div>
        <h1 className='relative z-10'>New Users This Month</h1>
 
        <div className="absolute -bottom-5 -right-3 text-purple-9">
          <h1 className="text-9xl font-extrabold">10</h1>
        </div>
    </div>
  )
}

export default NewUserCounter