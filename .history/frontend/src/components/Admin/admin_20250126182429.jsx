import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFirm } from '../../redux/Lawyer/lawyerSlice';
import './Admin.css'
function Admin() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=(firm)=>{
    dispatch(setFirm(firm));
    navigate('firm');
  }
  return (
    <div className='root-div'>
      <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleClick('firm1')}>Firm1</button>
      <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleClick('firm2')}>Firm2</button>
    </div>
  )
}

export default Admin