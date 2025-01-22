import React from 'react'
import {useNavigate} from 'react-router-dom';
function Book() {
  const navigate=useNavigate();
  return (
    <div className="firms">
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onclick={()=>navigate('/firm1')}>Firm1</button>
      <button onclick={()=>navigate('/firm2')}>Firm2</button>
      <button onclick={()=>navigate('/firm3')}>Firm3</button>
      <button onclick={()=>navigate('/firm4')}>Firm4</button>
      <button onclick={()=>navigate('/firm5')}>Firm5</button>
      <button onclick={()=>navigate('/firm6')}>Firm6</button>
      <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>navigate('/firm1')}>Login</button>
    </div>
  )
}

export default Book