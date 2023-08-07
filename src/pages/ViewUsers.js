import React, { useState, useEffect } from 'react';
import UserListItem from '../components/ViewUsersList/UserListItem.js';
import axios from 'axios';

const ViewUsers = () => {

  const [users, setUsers] = useState([]);
  const [refreshCount, setRefreshCount] = useState();
  const token = localStorage.getItem('RepeatifyToken');

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://saasproj.bsite.net/api/admin/merchant/list", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
  
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [refreshCount, token]);

  const handleRefresh = () => {
    setRefreshCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="border border-purple-9 p-5 rounded-md">
      <h1 className="text-left">Merchants</h1>
      <div className="flex w-full justify-end mb-5">
        <input placeholder="search" className="px-3 rounded-md"/>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <div>
        {users.length <=0 ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            {users.map((user) => (
              <UserListItem key={user.id} user={user}/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default ViewUsers