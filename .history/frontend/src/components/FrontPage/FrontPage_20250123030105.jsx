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
      <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Carousel autoPlay infiniteLoop interval={2000} showArrows={true}
          showThumbs={false} dynamicHeight={false} transitionTime={500} >
          <div>
            <img className="slideimage w-4/5 h-[70vh] sm: h-[50vh]" src={slide1} alt="Slide 1"/>
          </div>
          <div>
            <img className="slideimage w-4/5 h-[70vh] sm: h-[50vh]" src={slide2} alt="Slide 2" />
          </div>
          <div>
            <img className="slideimage w-4/5 h-[70vh] sm: h-[50vh]" src={slide3} alt="Slide 3"/>
          </div>
        </Carousel>
      </Box>
    );
  }
  
  export default FrontPage;