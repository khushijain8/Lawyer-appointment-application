import React, { useEffect, useState } from 'react';
import './FrontPage.css';  
import slide1 from '../../assets/expertise-2.jpg' 
import slide2 from '../assets/legal-consultancy-services.jpg';
import slide3 from '../assets/law2.jpg';

function FrontPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://via.placeholder.com/1920x1080?text=Slide+1",
    "https://via.placeholder.com/1920x1080?text=Slide+2",
    "https://via.placeholder.com/1920x1080?text=Slide+3"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrontPage;