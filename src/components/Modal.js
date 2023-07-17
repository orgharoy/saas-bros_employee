import React from 'react';
import {Link} from 'react-router-dom';
import doneImage from '../images/done.gif';

const Modal = ({user, setModal}) => {
  return (
    <div className="w-full h-full flex justify-center items-center backdrop-blur-[2px]">
      <div className="h-3/4 w-1/4 bg-white border border-purple-3 rounded-md flex flex-col justify-between items-center px-3 pb-11 pt-3">
        <img src={doneImage} alt="Done" />
        <h1 className="font-bold text-3xl text-center mb-12">Successfully Created New Usser</h1>
        <div className="flex">
          <Link to="/user/64664046b238dcaebd1875d7" className="bg-green text-white p-2 rounded mx-2 cursor-pointer" onClick={()=>{setModal(false)}}>
            <p>View User</p>
          </Link>
          <div className="bg-purple-1 text-white p-2 rounded mx-2 cursor-pointer" onClick={()=>{setModal(false)}}>
            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal