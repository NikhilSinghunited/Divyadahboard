import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Dashboard.css';
import BannerHome from './BannerHome';
import CategoryHome from './CategoryHome';
function Category() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <CategoryHome />
    </div>
  );
}

export default Category;
