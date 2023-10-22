import React from 'react'
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../../store/sidebarSlice';

const Sidebar = () => {

  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);

  return (
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ''}`}>
      <button type='button' className='sidebar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
        <i className='fas fa-times'></i>
      </button>
        <div className='sidebar-cnt'>
          <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>All Categories</div>
          <ul className='cat-list'>
            <li>
              <Link to='' className='cat-list-link text-capitalize'>Category Here</Link>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default Sidebar;