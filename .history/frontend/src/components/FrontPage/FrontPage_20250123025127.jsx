import React from 'react';
import './FrontPage.css';  
import { Box} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slide1 from '../../assets/expertise-2.jpg' 
import slide2 from '../../assets/legal-consultancy-services.jpg';
import slide3 from '../../assets/law2.jpg';
function FrontPage() {
    return (
      <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center', width:90% }}>
        <Carousel autoPlay infiniteLoop interval={2000} showArrows={true}
          showThumbs={false} dynamicHeight={false} transitionTime={500} >
          <div>
            <img src={slide1} alt="Slide 1" style={{ width: '80%', height: '70vh' }} />
          </div>
          <div>
            <img src={slide2} alt="Slide 2" style={{ width: '80%', height: '70vh'}} />
          </div>
          <div>
            <img src={slide3} alt="Slide 3" style={{ width: '80%', height: '70vh', }} />
          </div>
        </Carousel>
      </Box>
    );
  }
  
  export default FrontPage;