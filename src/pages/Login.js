import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: ""});
  const [errorMessage, setErrorMessage] = useState("");
  
  function isValid(values) {
    console.log(values);
    if(values.email === ""){
      setErrorMessage("Email is required");
      return false;
    }
    if(values.password === ""){
      setErrorMessage("Password is required");
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(isValid(formValues) === true){
      try{
        const response = await axios.post('localhost:3001/emp/employee-login', formValues);
        console.log(response);
      } catch(err){
        console.log(err)
      }

    } else {
      console.log(errorMessage)
    }
  }


  return (

    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-teal-300">
      <form className="flex flex-col gap-5 bg-purple-700 p-5 rounded-md text-black">
        <h1 className="text-2xl text-white text-center">Login</h1>
        <input type="email" placeholder="email" className="p-2 rounded-sm" value={formValues.email} onChange={(e) => setFormValues({...formValues, email:e.target.value})}/>
        <input type="password" placeholder="password" className="p-2 rounded-sm" value={formValues.password} onChange={(e) => setFormValues({...formValues, password:e.target.value})}/>

        <button className="bg-white text-purple-600 rounded-md hover:bg-teal-300 hover:text-white" onClick={handleSubmit} >Login</button>
      </form>

    </div>
        
  )
}

export default Login