import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-5">

      <div className="bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Hello User</h1>
      </div>

      <div className='col-span-2 grid grid-cols-2 gap-5 bg-slate-300 rounded-md'>
        <Link className="flex justify-center items-center py-5 pl-5 rounded-md hover:shadow-md"  to="/register-business">Register New User</Link>
        <Link className="flex justify-center items-center py-5 pl-5 rounded-md hover:shadow-md" to="/businesses">View User List</Link>
      </div>

      <div className="bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>New Users This Month</h1>
      </div>

      <div className='col-span-3 flex gap-5 justify-center bg-slate-300 p-5 rounded-md hover:shadow-md'>
        <h1>Graph of New Users in Last 6 Months</h1>
      </div>

      <div className="row-span-2 bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Calendar</h1>
      </div>

      <div className="row-span-2 bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Latest 5 users</h1>
      </div>

      <div className="bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Something Else</h1>
      </div>

      <div className="row-span-2 bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Notes</h1>
      </div>

      <div className="bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Something Else</h1>
      </div>

      <div className="bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Revenue</h1>
      </div>

    </div>
  )
}

export default Dashboard