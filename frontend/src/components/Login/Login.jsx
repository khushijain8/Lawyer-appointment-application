import { useNavigate } from 'react-router-dom';
import './Login.css';
import React, { useState } from 'react'
import axios from 'axios';
export const Login = () => {
    const navigate= useNavigate()
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit=()=>{
        axios.post(' ',{username,password})
    }

    return (
    <>
        <div className="parent">
        <form onSubmit={handleSubmit}  className='loginform bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm'>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your username'class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter your password' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <button type="submit" class="bg-black text-white rounded-full py-2 px-4 mx-2" >Submit</button>
        </form>
        </div>
        <div className='signupbut'>
            <span >Do not have an account?</span>
            <button class="bg-black text-white rounded-full py-2 px-4 mx-2" onClick={()=>navigate('/signup')}>Sign up</button>
        </div>
    </>
  )
}

