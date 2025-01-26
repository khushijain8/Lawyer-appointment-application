import React from 'react'
import { LawyerContainer } from '../LawyerContainer/LawyerContainer'
import { useNavigate } from 'react-router-dom'
function Book() {
  const navigate=useNavigate();
  return (
    <>
      <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>navigate('/firm1')}>Firm1</button>
      <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>navigate('/firm2')}>Firm2</button>
    </>
  )
}

export default Book