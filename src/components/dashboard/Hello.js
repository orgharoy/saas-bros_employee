import React from 'react'
import { Link } from 'react-router-dom'

const NewUserCounter = () => {
  return (
    <div className="rounded-md bg-orange-3 text-white relative overflow-hidden h-full z-50">
      <div className=" w-1/2 aspect-square bg-orange-4 rounded-full absolute -top-8 -left-3">
      </div>

      <Link to="profile" className="py-3 px-5 rounded-md block w-full h-full transparent group relative z-30">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="z-30">Hello,</h1>
            <h1 className="text-3xl font-bold z-30">Orgha</h1>
          </div>
          <div className="flex items-center z-30">
            <span className="pr-1 pt-1 hidden opacity-0 group-hover:block group-hover:opacity-100 ease-in-out duration-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 -translate-x-2 group-hover:translate-x-0 ease-in-out delay-100 duration-75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <p className="">View Profile</p>
            <span className="pl-1 pt-1 group-hover:translate-x-2 transition ease-in-out duration-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover:hidden ease-in-out delay-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </div>
        </div>

        <div className="absolute -bottom-5 -right-3">
          <svg className="fill-orange-6" width="120" height="120" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4989 2.9297C13.0136 2.9297 10.9989 4.9447 10.9989 7.4297C10.9989 9.91469 13.0136 11.9297 15.4989 11.9297C17.9842 11.9297 19.9989 9.91469 19.9989 7.4297C19.9989 4.9447 17.9842 2.9297 15.4989 2.9297ZM7.9989 3.9297C5.7898 3.9297 3.9989 5.7207 3.9989 7.9297C3.9989 10.1387 5.7898 11.9297 7.9989 11.9297C8.8283 11.9297 9.5854 11.7017 10.2517 11.2357C8.5429 8.69573 8.7851 6.2637 9.7164 4.3047C9.1845 4.0527 8.6003 3.9297 7.9989 3.9297ZM5.0614 13.2737C3.2273 14.0307 1.9989 15.8857 1.9989 17.9297V19.9297C1.9989 20.4817 2.4466 20.9297 2.9989 20.9297L7.1517 20.9317C6.9177 20.1717 6.9865 18.9397 7.0019 17.9427C7.0344 15.8257 7.9099 14.3157 8.2528 13.9177C7.6226 13.9127 6.8663 13.7597 6.3114 13.5237C6.1774 13.4667 6.0996 13.4217 5.8427 13.3047C5.5908 13.1897 5.3172 13.1677 5.0614 13.2737ZM12.0614 13.2737C10.2273 14.0307 8.9989 15.8857 8.9989 17.9297V19.9297C8.9989 20.4817 9.4466 20.9297 9.9989 20.9297H20.9989C21.5512 20.9297 21.9989 20.4817 21.9989 19.9297V17.9297C21.9989 15.9337 20.7637 14.1237 18.9364 13.3357C18.6792 13.2247 18.3795 13.2217 18.1239 13.3357C17.2391 13.7327 16.3771 13.9297 15.4989 13.9297C14.6237 13.9297 13.7587 13.7217 12.8427 13.3047C12.5908 13.1897 12.3172 13.1677 12.0614 13.2737Z" />
          </svg>
        </div>
      </Link>

    </div>  
  )
}

export default NewUserCounter