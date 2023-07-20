import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../userContext.js";

const Login = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserContext);
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
  });

  const isValid = () => {
    let errors = { username: "", password: "" };
    let isValid = true;

    if (!formValues.username) {
      errors.username = "username is required";
      isValid = false;
    }
    if (!formValues.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      try {
        const response = await axios.post(
          "https://saasproj.bsite.net/api/auth/login",
          formValues
        );
        console.log(response.data);
        //console.log(response.data.token);
        //const { token, employee } = response.data;
        //setUserId(employee._id);

        //navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="absolute bg-white top-0 left-0 h-screen w-screen flex justify-center items-center">
      {/*
      <form className="flex flex-col gap-5 bg-purple-2 p-5 rounded-md text-black">
        <h1 className="text-2xl text-white text-center">Login</h1>
        <input type="text" placeholder="username" className="p-2 rounded-sm" value={formValues.username} onChange={(e) => setFormValues({...formValues, username:e.target.value})}/>
        {errorMessages.username && <p className="text-red-600">{errorMessages.username}</p>}
        <input type="password" placeholder="password" className="p-2 rounded-sm" value={formValues.password} onChange={(e) => setFormValues({...formValues, password:e.target.value})}/>
        {errorMessages.password && <p className="text-red-600"> {errorMessages.password} </p>}
        <button className="bg-white text-purple-600 rounded-md hover:bg-teal-300 hover:text-white" onClick={handleSubmit} >Login</button>
      </form>
      */}
      <div className="absulate p-2 justify-center rounded-lg items-center bg-purple-5">
        <form className="flex flex-col bg-white p-9 rounded-md text-purple-2">
          <h1 className="text-3xl font-bold text-center">Hello Admin!</h1>
          <h2 className="text-lg font-sans text-center mb-14">
            Welcome to login page.
          </h2>
          <label className="text-lg">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="px-2 py-1 text-sm rounded-md border"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
          {errorMessages.username && (
            <p className="text-red text-sm">{errorMessages.username}</p>
          )}
          <label className="text-lg mt-3 ">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-1 text-sm rounded-md border"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {errorMessages.password && (
            <p className="text-red text-sm">{errorMessages.password}</p>
          )}
          <button
            className="text-white mt-4 mb-3 bg-purple-4 rounded-md border font-bold py-2 px-4 w-full hover:bg-purple-2"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
          <p className="text-center hover:underline cursor-pointer">
            Forgot Password?
          </p>
          {/*
          <p className="text-center">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Create an account
            </a>
          </p>
          */}
        </form>
      </div>
    </div>
  );
};

export default Login;
