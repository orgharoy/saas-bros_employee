import React from 'react';
import { Link } from "react-router-dom";

const NewUserAndViewUser = () => {
  return (
    <div className="py-3 rounded-md border border-purple-1 text-black h-full grid grid-cols-2 overflow-hidden">
        <Link className="mx-5 border-r-4 border-r-purple-1 flex items-center relative"  to="/register-business">
            <h1 className="text-2xl font-bold z-30">Register New User</h1>
            <span className="absolute -bottom-7 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e9d5ff" className="w-28 h-28">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
            </span>
        </Link>
        <Link className="mx-5 flex items-center relative"  to="/businesses">
            <h1 className="text-2xl font-bold z-30">View User List</h1>
            <span className="absolute -bottom-7 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#e9d5ff" className="w-28 h-28">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            </span>
        </Link>
    </div>
  )
}

export default NewUserAndViewUser