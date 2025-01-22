import React from 'react'
import lawlogo from '../../assets/law.png';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
function Navbar() {
    const navigate=useNavigate()
  return (
    <>
        <div className='navbar sm:flex-col  '>
            <div className="left-nav">
                <img className = "logo px-2 py-2" src={lawlogo} alt="logo"></img>
                <span className="heading">LawEngage</span>
            </div>
            <div className='right-nav flex justify-center items-center '>
                <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={()=>navigate('/signup')}>Sign up</button>
                <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>navigate('/login')}>Login</button>
            </div>
        </div>
        <div className='mid-nav flex justify-center items-center  '>
        <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={()=>navigate('/book')}>Book Appointment</button>
    </div>
    </>
  )
}

export default Navbar