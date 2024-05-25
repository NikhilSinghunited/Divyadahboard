import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import PagesForm from './PagesForm';

function Pages() {
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
      <PagesForm />
    </div>
  );
}

export default Pages;
