import React, { useState, useEffect, useContext } from 'react';
import UserListItem from '../components/UserListItem.js';
import { UserContext } from '../userContext.js';
import axios from 'axios';

const ViewUsers = () => {

  const { userId, setUserId } = useContext(UserContext);
  const [users, setUsers] = useState({merchants: []});
  const [refreshCount, setRefreshCount] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log(userId);
        const response = await axios.get(`http://localhost:3001/emp/my-merchants/${userId}`);
        setUsers(response.data);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [refreshCount, userId]);

  const handleRefresh = () => {
    setRefreshCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="bg-purple-7 p-5 rounded-md">
      <h1 className="text-left">Merchants</h1>
      <div className="flex w-full justify-end mb-5">
        <input placeholder="search" className="px-3 rounded-md"/>
        <button onClick={handleRefresh}>Refresh</button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className = "flex items-center col-span-2">
          <div className="w-5 h-5 rounded-full"></div>
          <h1 className="pl-3">Company Name</h1>
        </div>
        <div>
          <h1>Contact Number</h1>
        </div>
        <div>
          <h1>Catagory</h1>
        </div>
        <div>
          <h1>Date Subscribed</h1>
        </div>
        <div>
          <h1>Subscription Expiration Date</h1>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green"></div>
          <h1 className="pl-3">Status</h1>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-7 ">
        <div className = "flex items-center col-span-2">
          <div className="w-5 h-5 rounded-full bg-black"></div>
          <h1 className="pl-3">Raihanul and Co.</h1>
        </div>
        <div>
          <h1>+60 1764-34233</h1>
        </div>
        <div>
          <h1>Grocery Store</h1>
        </div>
        <div>
          <h1>14th July, 2022</h1>
        </div>
        <div>
          <h1>14th July, 2023</h1>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green"></div>
          <h1 className="pl-3">Active</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7">
        <div className = "flex items-center col-span-2">
          <div className="w-5 h-5 rounded-full bg-black"></div>
          <h1 className="pl-3">Raihanul and Co.</h1>
        </div>
        <div>
          <h1>+60 1764-34233</h1>
        </div>
        <div>
          <h1>Grocery Store</h1>
        </div>
        <div>
          <h1>14th July, 2022</h1>
        </div>
        <div>
          <h1>14th July, 2023</h1>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green"></div>
          <h1 className="pl-3">Active</h1>
        </div>
      </div>
      {/* <div>
        {users.merchants.map((user) => (
          <UserListItem key={user.id} user={user}/>
        ))}
      </div> */}
    </div>
  )
}

export default ViewUsers