import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({user}) => {
  return (
    <div className="grid grid-cols-10 text-sm bg-white px-5 rounded-md text-purple-600 my-5 gap-2">
        <p className="col-span-2">{user.businessName}</p>
        <p>{user.ownerName}</p>
        <p className="col-span-2">{user.businessEmail}</p>
        <p>{user.businessContactNumber}</p>
        <p className="col-span-2">{user.businessAddress}</p>
        <p>Status</p>
        <Link to={`/user/${user._id}`}>Visit Page</Link>
    </div>
  )
}

export default UserListItem