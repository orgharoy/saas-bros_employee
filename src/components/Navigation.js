import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-[calc(100vh-48px)] bg-purple-600 p-5 sticky top-12 text-white" >
      <div className="flex flex-col">
        <Link to="/">Home</Link>
        <Link to="/register-business">Register New Business</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/businesses">My Businesses</Link>
        <Link to="/calendar">My Calendar</Link>
        <Link to="/notes">My Notes</Link>
      </div>
    </div>
  )
}

export default Navigation