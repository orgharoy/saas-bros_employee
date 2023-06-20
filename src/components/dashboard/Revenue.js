import React from 'react'

const Revenue = () => {
  return (
    <div className="py-3 px-5 rounded-md h-full bg-purple-3 text-white relative overflow-hidden">
      <div className="relative z-40">
        <div>
          <p>Revenue Generated This Month</p>
          <div className="flex mt-2">
            <p className="pr-1">RM</p>
            <h1 className="text-5xl font-bold">710k</h1>
            <div className="flex text-green relative z-30 pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 z-10 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              <p className="text-md">33%</p>
            </div>
          </div>
        </div>
      </div>
        

      <div className="absolute w-96 h-96 aspect-square bg-purple-4 rounded-full -top-44 -right-44"></div>
      <div className="absolute w-96 h-96 aspect-square bg-purple-6 rounded-full -bottom-44 -right-44 z-10"></div>
    </div>
  )
}

export default Revenue