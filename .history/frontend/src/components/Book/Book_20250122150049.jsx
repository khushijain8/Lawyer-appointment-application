import React from 'react'
import {useNavigate} from 'react-router-dom';
function Book() {
  const navigate=useNavigate();
  return (
    <div className="firms">
      <button onclick={()=>navigate('/firm1')}>Firm1</button>
      <button onclick={()=>navigate('/firm2')}>Firm2</button>
      <button onclick={()=>navigate('/firm3')}>Firm3</button>
      <button onclick={()=>navigate('/firm4')}>Firm4</button>
      <button onclick={()=>navigate('/firm5')}>Firm5</button>
      <button onclick={()=>navigate('/firm6')}>Firm6</button>
    </div>
  )
}

export default Book