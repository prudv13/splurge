import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <ul className='flex top-links align-center'>
                <li>
                  <Link to='/seller'>Seller Center</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;