import React from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const navigate= useNavigate()
  const[name,setName]=useState('');
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('',{name,username,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  return (
    <>
      <div className='parent'>
      <form onSubmit={handleSubmit} className="Signup bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <input type="text" onChange={(e)=>setName(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Enter your full name'/>
        <input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder='Enter your username'class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter your password' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button class="bg-black text-white rounded-full py-2 px-4 mx-2" type="submit">Submit</button>
      </form>
      </div>
      <div className='loginbut'>
        <span>Already have an account?</span>
        <button class="bg-black text-white rounded-full py-2 px-4 mx-2" onClick={()=>navigate('/login')}>Login</button>
        </div>
    </>
    
  )
}

export default Signup