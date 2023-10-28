import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer bg-yellow'>
      <div className='container py-2 text-center'>
        
        <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; {new Date().getFullYear()} Splurge | All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;