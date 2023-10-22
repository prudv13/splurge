import React from 'react'
import './Slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { sliderImgs } from '../../utils/images';


const HeaderSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className='container'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src={sliderImgs[0]} alt='sliderImg1' />
            </div>
            <div className='slider-item'>
              <img src={sliderImgs[1]} alt='sliderImg2' />
            </div>
            <div className='slider-item'>
              <img src={sliderImgs[2]} alt='sliderImg3' />
            </div>
            <div className='slider-item'>
              <img src={sliderImgs[3]} alt='sliderImg4' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider;