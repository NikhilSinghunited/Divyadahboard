import React, { useEffect, useState } from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from 'react-icons/bs';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
function Header({ OpenSidebar }) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setIsLogin(true);
    }
  }, []);
  
  const navigate = useNavigate();
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='ml-auto pr-5'>
        {isLogin?<button onClick={()=>{localStorage.removeItem('token');navigate("/");}} className='btn btn-error'>LogOut</button>:null}
      </div>

      <div className='header-right'>
        <div>
          <BsFillBellFill className='icon' />
          <BsFillEnvelopeFill className='icon' />
          <BsPersonCircle className='icon' />
        </div>

      </div>
    </header>
  );
}

export default Header;
