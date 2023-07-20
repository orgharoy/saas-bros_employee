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
    <div className="p-3 border border-purple-9 rounded-md">
      <div className="md:grid md:grid-cols-5 border-b border-purple-9 relative">
        <div className="col-span-1 p-3">
          <div className="w-full aspect-square bg-orange-4 rounded-full"></div>
        </div>
        <div className="col-span-4 p-3"> 
          <h1 className="text-3xl font-semibold mt-5" >Data-Edge Limited</h1>
          <p className="text-md font-normal py-2 w-full">Software Development Company</p>
        </div>

        <button className="bg-purple-4 text-white absolute top-0 right-0 py-1 px-3 rounded-md">Edit Profile</button>
      
      </div>


      <div className="md:grid md:grid-cols-5 p-3">

        <div className="col-span-1"> 
          <h1>Business Information</h1>
        </div>

        <div className="col-span-4 md:grid md:grid-cols-4 mb-2">

          <h1 className="col-span-1 mb-2">Business Email:</h1>
          <p className="col-span-3 mb-2">orgharoy@de.com</p>

          <h1 className="col-span-1 mb-2">Business Phone:</h1>
          <p className="col-span-3 mb-2">+60 178-23433</p>

          <h1 className="col-span-1 mb-2">Business Description:</h1>
          <p className="col-span-3 mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nihil eligendi, repellat ab quaerat commodi qui distinctio quo nemo officiis adipisci facere maxime provident facilis molestias eos ducimus hic corporis?</p>

          <h1 className="col-span-1 mb-2">Business Address:</h1>
          <p className="col-span-3 mb-2">Pantai Hillpark Phase - 5, Bangsar South, Kuala Lumpur, Malaysia</p>

        </div>

        <div className="col-span-1"> 
          <h1>Business Details</h1>
        </div>

        <div className="col-span-4 md:grid md:grid-cols-4 mb-2">

          <h1 className="col-span-1 mb-2">Business Reg No.:</h1>
          <p className="col-span-3 mb-2">1123543456</p>

          <h1 className="col-span-1 mb-2">Business Tax ID:</h1>
          <p className="col-span-3 mb-2">78-23433</p>

          <h1 className="col-span-1 mb-2">Company Type:</h1>
          <p className="col-span-3 mb-2">Public Limited Company</p>

          <h1 className="col-span-1 mb-2">Business Size:</h1>
          <p className="col-span-3 mb-2">31 - 50</p>

          <h1 className="col-span-1 mb-2">Sales Volume:</h1>
          <p className="col-span-3 mb-2">RM 100k - RM 500k</p>

        </div>

        <div className="col-span-1"> 
          <h1>Merchant Details</h1>
        </div>

        <div className="col-span-4 md:grid md:grid-cols-4 mb-2">

          <h1 className="col-span-1 mb-2">Merchant Name:</h1>
          <p className="col-span-3 mb-2">Orgha Tomal Roy</p>

          <h1 className="col-span-1 mb-2">Merchant Email:</h1>
          <p className="col-span-3 mb-2">orgharoy@gmail.com</p>

          <h1 className="col-span-1 mb-2">Merchant Phone:</h1>
          <p className="col-span-3 mb-2">+880 1767-476903</p>

          <h1 className="col-span-1 mb-2">Business Address:</h1>
          <p className="col-span-3 mb-2">Pantai Hillpark Phase - 5, Bangsar South, Kuala Lumpur, Malaysia</p>

        </div>

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