import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const userId = useParams();
  const [user, setUser] = useState({ user: { user: [] } });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        
        const response = await axios.get(`http://localhost:3001/emp/user/${userId.id}`);
        setUser(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [userId]);

  return (
    <div className="bg-white">
      <h1>User Details Page</h1>

      {user.user.length > 0 ? (
        <>
          <h1>user ID: {user.user[0]._id}</h1>
          <h1>business Name: {user.user[0].businessName}</h1>
          <h1>business Type: {user.user[0].businessType}</h1>
          <h1>owner name: {user.user[0].ownerName}</h1>
          <h1>owner Contact: {user.user[0].ownerContactNumber}</h1>
          <h1>business Email: {user.user[0].businessEmail}</h1>
          <h1>Business Contact Number: {user.user[0].businessContactNumber}</h1>
          <h1>Business Address: {user.user[0].businessAddress}</h1>
          <h1>Business Registration Number: {user.user[0].businessRegNumber}</h1>
          <h1>Business Tax Id: {user.user[0].businessTaxId}</h1>
          <h1>Number Of Employees: {user.user[0].numberOfEmployees}</h1>
          <h1>Number Of Employees: {user.user[0].numberOfEmployees}</h1>
          <h1>Sales Volume: {user.user[0].salesVolume}</h1>
          <h1>Created By: {user.user[0].createdBy}</h1>
          <h1>Created At: {user.user[0].createdAt}</h1>
          <h1>Updated By: {user.user[0].updatedAt}</h1>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default User