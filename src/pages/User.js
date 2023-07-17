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
    <div className="border border-purple-9 rounded-md md:grid grid-cols-5 p-3">
      <div className="col-span-1 border-e border-purple-8 flex flex-col items-center text-center pr-3">
        <div className="w-full aspect-square bg-orange-4 rounded-full"></div>
        <h1 className="text-xl font-semibold">Data-Edge Limited</h1>
        <p className="text-sm font-light">Orgha Tomal Roy</p>

      </div>
      <div className="col-span-3 pl-3">
        <h1>second</h1>
      </div>
    </div>
  )
}

export default User



  // <div className="bg-white">
  //     <h1>User Details Page</h1>

  //     {user.user.length > 0 ? (
  //       <>
  //         <h1>user ID: {user.user[0]._id}</h1>
  //         <h1>business Name: {user.user[0].businessName}</h1>
  //         <h1>business Type: {user.user[0].businessType}</h1>
  //         <h1>owner name: {user.user[0].ownerName}</h1>
  //         <h1>owner Contact: {user.user[0].ownerContactNumber}</h1>
  //         <h1>business Email: {user.user[0].businessEmail}</h1>
  //         <h1>Business Contact Number: {user.user[0].businessContactNumber}</h1>
  //         <h1>Business Address: {user.user[0].businessAddress}</h1>
  //         <h1>Business Registration Number: {user.user[0].businessRegNumber}</h1>
  //         <h1>Business Tax Id: {user.user[0].businessTaxId}</h1>
  //         <h1>Number Of Employees: {user.user[0].numberOfEmployees}</h1>
  //         <h1>Number Of Employees: {user.user[0].numberOfEmployees}</h1>
  //         <h1>Sales Volume: {user.user[0].salesVolume}</h1>
  //         <h1>Created By: {user.user[0].createdBy}</h1>
  //         <h1>Created At: {user.user[0].createdAt}</h1>
  //         <h1>Updated By: {user.user[0].updatedAt}</h1>
  //       </>
  //     ) : (
  //       <h1>Loading...</h1>
  //     )}
  //   </div>