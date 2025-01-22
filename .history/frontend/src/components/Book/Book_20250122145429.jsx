import React from 'react'
import {useNavigate} from 'react-router-dom';
function Book() {
  const navigate=useNavigate();
  return (
    <div>
      <button onclick={()=>navigate('/firm1')}>Firm1</button>
    </div>
  )
}

export default Book