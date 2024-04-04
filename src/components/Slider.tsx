import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import SliderOne from '../assets/images/slider-1.png'; 
import SliderTwo from '../assets/images/slider-1.png'; 
import SliderThree from '../assets/images/slider-1.png'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(current => (current === sliderImages.length - 1 ? 0 : current + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sliderImages = [SliderOne, SliderTwo, SliderThree];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section className='py-20 wrapper'>
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ImageSlider;
