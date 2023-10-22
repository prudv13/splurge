import React from 'react'
import './Home.scss'
import HeaderSlider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <main>
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>
    </main>
  )
}

export default Home;