import React from 'react'
import lawlogo from '../../assets/law.png';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
function Navbar() {
    const navigate=useNavigate()
  return (
    <div className='navbar'>
        <div className="left-nav">
            <img className = "logo px-2 py-2" src={lawlogo} alt="logo"></img>
            <span className="heading">LawEngage</span>
        </div>
        <div className='right-nav'>
            <button class="bg-black text-white rounded-full py-2 px-4 mx-2" onClick={()=>navigate('/signup')}>Sign up</button>
            <button class="bg-black text-white rounded-full py-2 px-4 mx-2" onClick={()=>navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Navbar