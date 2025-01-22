import React from 'react'
import {useNavigate} from 'react-router-dom';
function book() {
  const navigate=useNavigate();
  return (
    <div>
      <Button onclick={()=>navigate('/firm1')}>Firm1</Button>
    </div>
  )
}

export default book