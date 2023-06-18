import React from 'react';
import { Link } from "react-router-dom";
import NewUserCounter from '../components/dashboard/NewUserCounter';
import Hello from '../components/dashboard/Hello';
import NewUserAndViewUser from '../components/dashboard/NewUserAndViewUser';
import LatestFiveUsers from '../components/dashboard/LatestFiveUsers';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-5">

      <div className='rounded-md'>
        <Hello/>
      </div>

      <div className='col-span-2 rounded-md'>
        <NewUserAndViewUser/>
      </div>

      <div className="rounded-md">
        <NewUserCounter/>
      </div>

      <div className='col-span-3 flex gap-5 justify-center bg-slate-300 p-5 rounded-md hover:shadow-md'>
        <h1>Graph of New Users in Last 6 Months</h1>
      </div>

      <div className="row-span-2 bg-slate-300 p-5 rounded-md hover:shadow-md" >
        <h1>Calendar</h1>
      </div>

      <div className="row-span-2" >
        <LatestFiveUsers />
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