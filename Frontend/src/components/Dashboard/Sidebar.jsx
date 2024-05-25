import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import './Dashboard.css';
import { Link } from 'react-router-dom';
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id='sidebar'
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/admin'>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin/banner'>
            <BsFillArchiveFill className='icon' /> Banner
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin/category'>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin/pages'>
            <BsListCheck className='icon' /> Pages
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''>
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
