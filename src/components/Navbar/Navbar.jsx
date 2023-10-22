import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOn } from '../../store/sidebarSlice';
import { getAllCategories } from '../../store/categorySlice';
const Navbar = () => {

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type='button' className='sidebar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
            <i className='fas fa-bars'></i>
          </button>
          <Link to='/' className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Splurge</span>
            </span>
          </Link>
        </div>

        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type='text' className='form-control fs-14' placeholder='Search your preferred items here' />
              <Link to='' className='text-white search-btn flex align-center justify-center'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </div>
          </div>

          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
            {
              categories.slice(0,8).map((category, idx) => (
                <li className='nav-item no-wrap' key={idx}>
                  <Link to={`category/${category}`} className='nav-link text-capitalize'>{category}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <Link to='/cart' className='navbar-cart flex align-center'>
          <i className='fa-solid fa-cart-shopping'></i>
          <div className='cart-items-value mx-2'>0</div>
          <i className="fa-solid fa-caret-down fa-xs"></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;