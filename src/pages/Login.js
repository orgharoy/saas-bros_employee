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
        const response = await axios.post("https://saasproj.bsite.net/api/auth/login", formValues );
        const token = response.data.token
        localStorage.setItem('RepeatifyToken', token);
        navigate('/');
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

          

          <div class="w-full py-5">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="ml-3 px-1 pointer-events-none absolute left-0 -top-1.5 flex select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:bg-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Required
              </label>
            </div>
          </div>

          <div class="relative">
            <input type="text" id="floating_outlined" class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-purple-1 bg-transparent rounded-lg border-1 border-purple-1 appearance-none dark:text-purple-3 dark:border-purple-6 dark:focus:border-purple-6 focus:outline-none focus:ring-0 focus:border-purple-1 peer" placeholder=" " />
            <label for="floating_outlined" class="absolute text-sm text-purple-1 dark:text-purple-4 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-purple-2 peer-focus:dark:text-purple-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
          </div>



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
