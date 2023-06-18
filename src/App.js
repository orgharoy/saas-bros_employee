import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Topbar from "./components/Topbar.js";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import NewUser from "./pages/RegisterNewUser.js";
import MyUsers from "./pages/ViewUsers.js";
import Calendar from "./pages/Calendar.js";
import Notes from "./pages/Notes.js";
import Packages from "./pages/Packages.js";

import User from "./pages/User.js";



function App() {

  const location = useLocation();

  return (
    
      <div className="grid grid-cols-6 w-screen bg-white">
        <div className="col-span-1">
          { location.pathname !== '/login' && <Navigation /> }
        </div>
        <div className= "col-span-5">
          { location.pathname !== '/login' && <Topbar/> }
          <div className="p-5">
            <Routes>
              <Route path="/login" element={<Login/>} />  
              <Route path="/" element={<Dashboard/>} />
              <Route path="/register-business" element={<NewUser/>} />
              <Route path="/packages" element={<Packages />}/>
              <Route path="/businesses" element={<MyUsers/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/notes" element={<Notes/>} />

              <Route path="/user/:id" element={<User/>} />
            </Routes>
          </div>
        </div>
      </div>

  );
}

export default App;
