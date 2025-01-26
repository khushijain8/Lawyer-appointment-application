import React from 'react';
import './FrontPage.css';  
import { Box} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slide1 from '../../assets/expertise-2.jpg' 
import slide2 from '../../assets/legal-consultancy-services.jpg';
import slide3 from '../../assets/law2.jpg';
import { useNavigate } from 'react-router-dom';
function FrontPage() {
    const navigate=useNavigate();
    return (
      <>
      <div className='mid-nav flex justify-center items-center  '>
        <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={()=>navigate('/book')}>Book Appointment</button>
        <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={()=>navigate('/admin')}>Booking History</button>
    </div>
  
      <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center', marginTop:'10px'}}>
        <Carousel autoPlay infiniteLoop interval={2000} showArrows={true}
          showThumbs={false} dynamicHeight={false} transitionTime={500} >
          <div>
            <img src={slide1} alt="Slide 1" style={{ width: '85%', height: '70vh' }} />
          </div>
          <div>
            <img src={slide2} alt="Slide 2" style={{ width: '85%', height: '70vh'}} />
          </div>
          <div>
            <img src={slide3} alt="Slide 3" style={{ width: '85%', height: '70vh', }} />
          </div>
        </Carousel>
      </Box>
      </>
    );
  }
  
  export default FrontPage;