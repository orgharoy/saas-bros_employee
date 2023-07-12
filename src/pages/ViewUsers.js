import React, { useState, useEffect, useContext } from 'react';
import UserListItem from '../components/ViewUsersList/UserListItem.js';
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
    <div className="border border-purple-9 p-5 rounded-md">
      <h1 className="text-left">Merchants</h1>
      <div className="flex w-full justify-end mb-5">
        <input placeholder="search" className="px-3 rounded-md"/>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      {/* <div>
        {users.merchants.map((user) => (
          <UserListItem key={user.id} user={user}/>
        ))}
      </div> */}
    </div>
  )
}

export default ViewUsers