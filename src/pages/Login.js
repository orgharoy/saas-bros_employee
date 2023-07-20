import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../userContext.js';

const Login = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserContext);
  const [formValues, setFormValues] = useState({ username: "", password: ""});
  const [errorMessages, setErrorMessages] = useState({ username: '', password: '' });

  const isValid = () => {
    let errors = { username: '', password: '' };
    let isValid = true;

    if (!formValues.username) {
      errors.username = 'username is required';
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
        const response = await axios.post('https://saasproj.bsite.net/api/auth/login', formValues);
        //console.log(response.data.token);
        const token = response.data.token;
        //const { token, employee } = response.data;
        localStorage.setItem('jwtToken', token);
        //setUserId(employee._id);
        
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (

    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-teal-300">

      <form className="flex flex-col gap-5 bg-purple-2 p-5 rounded-md text-black">
        <h1 className="text-2xl text-white text-center">Login</h1>
        <input type="text" placeholder="username" className="p-2 rounded-sm" value={formValues.username} onChange={(e) => setFormValues({...formValues, username:e.target.value})}/>
        {errorMessages.username && <p className="text-red-600">{errorMessages.username}</p>}
        <input type="password" placeholder="password" className="p-2 rounded-sm" value={formValues.password} onChange={(e) => setFormValues({...formValues, password:e.target.value})}/>
        {errorMessages.password && <p className="text-red-600"> {errorMessages.password} </p>}
        <button className="bg-white text-purple-600 rounded-md hover:bg-teal-300 hover:text-white" onClick={handleSubmit} >Login</button>
      </form>

    </div>
        
  )
}

export default Login