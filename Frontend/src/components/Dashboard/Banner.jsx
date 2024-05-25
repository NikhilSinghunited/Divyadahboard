import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Dashboard.css';
import BannerHome from './BannerHome';
function Banner() {
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
      <BannerHome />
    </div>
  );
}

export default Banner;
