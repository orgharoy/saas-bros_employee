import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({user}) => {
  return (
      <Link to={`/user/${user.merchantId}`} className="md:flex justify-between border border-purple-9 rounded-md my-2 py-1 px-3 hover:shadow-md">
        <div className = "flex items-center col-span-2 w-2/6">
          <div className="w-7 h-7 rounded-full bg-black"></div>
          <div className="pl-3">
            <h1 className="font-medium">{user.businessName}</h1>
            <p className="text-xs font-thin">{user.merchantName}</p>
          </div>
        </div>
        <div className="flex w-4/6 justify-between">
          <div className="w-1/5">
            <h1 className="font-medium">{user.businessPhone}</h1>
            <p className="text-xs font-thin">Contact Number</p>
          </div>
          <div className="w-1/5">
            <h1 className="font-medium">Grocery Store</h1>
            <p className="text-xs font-thin">Business Type</p>
          </div>
          <div className="w-1/5">
            <h1 className="font-medium">14th July, 2022</h1>
            <p className="text-xs font-thin">Joining Date</p>
          </div>
          <div className="w-1/5">
            <h1 className="font-medium">14th July, 2023</h1>
            <p className="text-xs font-thin">Subscription Exp Date</p>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green"></div>
            <h1 className="pl-3">Active</h1>
          </div>

        </div>
        
      </Link>
  )
}

export default UserListItem