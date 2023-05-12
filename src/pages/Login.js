import React from 'react'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (

    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-teal-300">
      <form className="flex flex-col gap-5 bg-purple-700 p-5 rounded-md text-white">
        <h1>Login</h1>
        <input type="email" placeholder="email" className="p-2 rounded-sm" />
        <input type="password" placeholder="password" className="p-2 rounded-sm" />

        <button className="bg-white text-purple-600 rounded-md hover:bg-teal-300 hover:text-white" onClick={handleSubmit} >Login</button>
      </form>

    </div>
        
  )
}

export default Login