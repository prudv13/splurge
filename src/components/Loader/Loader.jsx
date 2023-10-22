import React from 'react'
import './Loader.scss'
import { loader } from '../../utils/images'

const Loader = () => {
  return (
    <div className='container'>
      <div className='loader flex justify-center align-center'>
        <img src={loader} alt='loader' style={{width: '90px'}} />
      </div>
    </div>
  )
}

export default Loader;