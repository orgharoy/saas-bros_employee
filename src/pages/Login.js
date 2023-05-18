import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../userContext.js';

const Login = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserContext);
  const [formValues, setFormValues] = useState({ email: "", password: ""});
  const [errorMessages, setErrorMessages] = useState({ email: '', password: '' });

  const isValid = () => {
    let errors = { email: '', password: '' };
    let isValid = true;

    if (!formValues.email) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      try {
        const response = await axios.post('http://localhost:3001/emp/employee-login', formValues);
         
        const { token, employee } = response.data;
        localStorage.setItem('jwtToken', token);
        setUserId(employee._id);
        
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (

    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-teal-300">

      <form className="flex flex-col gap-5 bg-purple-700 p-5 rounded-md text-black">
        <h1 className="text-2xl text-white text-center">Login</h1>
        <input type="email" placeholder="email" className="p-2 rounded-sm" value={formValues.email} onChange={(e) => setFormValues({...formValues, email:e.target.value})}/>
        {errorMessages.email && <p className="text-red-600">{errorMessages.email}</p>}
        <input type="password" placeholder="password" className="p-2 rounded-sm" value={formValues.password} onChange={(e) => setFormValues({...formValues, password:e.target.value})}/>
        {errorMessages.password && <p className="text-red-600"> {errorMessages.password} </p>}
        <button className="bg-white text-purple-600 rounded-md hover:bg-teal-300 hover:text-white" onClick={handleSubmit} >Login</button>
      </form>

    </div>
        
  )
}

export default Login