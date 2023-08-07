import React, {useState} from "react";
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
import EditMerchant from "./pages/EditMerchant.js";

import User from "./pages/User.js";
import Modal from "./components/Modal.js";



function App() {
  const [modal, setModal] = useState(false);
  const [newMerchant, setNewMerchant] = useState();

  const location = useLocation();

  return (
    <div className="flex relative">
      <div className="sticky top-0 h-screen w-1/6 z-50">
          { location.pathname !== '/login' && <Navigation /> }
      </div>
      <div className="w-5/6">
        { location.pathname !== '/login' && <Topbar/> }
        <div className="p-5">
             <Routes>
               <Route path="/login" element={<Login/>} />  
               <Route path="/" element={<Dashboard/>} />
               <Route path="/register-business" element={<NewUser setModal = {setModal} setNewMerchant = {setNewMerchant}/>} />
               <Route path="/packages" element={<Packages />}/>
               <Route path="/businesses" element={<MyUsers/>} />
               <Route path="/calendar" element={<Calendar/>} />
               <Route path="/notes" element={<Notes/>} />

               <Route path="/user/:id" element={<User/>} />
               <Route path="/edit-merchant/:id" element={<EditMerchant/>} />
             </Routes>
           </div>
      </div>

      <div className={modal === true ? `w-screen h-screen top-0 left-0 fixed z-50` : `hidden`}>
        <Modal newMerchant={newMerchant} setModal={setModal}/>
      </div>
    </div>

  );
}

export default App;
