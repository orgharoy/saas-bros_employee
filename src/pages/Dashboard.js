import React from 'react';
import { Link } from "react-router-dom";
import NewUserCounter from '../components/dashboard/NewUserCounter';
import Hello from '../components/dashboard/Hello';
import NewUserAndViewUser from '../components/dashboard/NewUserAndViewUser';
import LatestFiveUsers from '../components/dashboard/LatestFiveUsers';
import Calendar from '../components/dashboard/Calendar';
import Graph from '../components/dashboard/Graph';
import Notes from '../components/dashboard/Notes';
import Revenue from '../components/dashboard/Revenue';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5">

      <div className='rounded-md'>
        <Hello/>
      </div>

      <div className='md:col-span-2 rounded-md'>
        <NewUserAndViewUser/>
      </div>

      <div className="rounded-md">
        <NewUserCounter/>
      </div>

      <div className='md:col-span-3 '>
        <Graph/>
      </div>

      <div className="md:row-span-3" >
        <Revenue/>
      </div>

      <div className="md:row-span-2" >
        <LatestFiveUsers />
      </div>

      <div className="md:row-span-2" >
        <Calendar/>
      </div>

      <div className="md:row-span-2" >
        <Notes/>
      </div>

    </div>
  )
}

export default Dashboard