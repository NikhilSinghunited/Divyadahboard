import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className='py-2'>
      <div className='navbar max-w-screen-xl mx-auto'>
        <div className='navbar-start'>
          <Link to={'/'} className='w-[60px] flex items-center'>
            <img src='/images/logo.png' alt='logo' />
            <div className='ms-1'>
              <p className='font-RacingSansOne text-[1.5em] tracking-[0.5rem]'>
                DIVYA
              </p>
              <p className='font-bold text-pink text-[0.75em] tracking-[0.05rem] whitespace-nowrap mt-[-6px]'>
                Escort Service
              </p>
            </div>
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='dropdown responsiveNavbar'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle w-[40px]'
            >
              <svg
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z'
                    fill='#fc48b9'
                  ></path>{' '}
                </g>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content -translate-x-[80%] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <NavLink to='/' className='font-semibold'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin' className='font-semibold'>
                  Dashboard
                </NavLink>
              </li>
              <details>
                <summary className='p-2 font-semibold'>Hot Girls</summary>
                <ul className='p-2 bg-base-100 rounded-t-none'>
                  <li>
                    <Link to='/Call-Girls-in-New-Delhi'>New Delhi</Link>
                  </li>
                  <li>
                    <Link to='/Call-Girls-in-IIT-Delhi'>IIT Delhi</Link>
                  </li>
                </ul>
              </details>
              <details>
                <summary className='p-2 font-semibold'>Party Girls</summary>
                <ul className='p-2 bg-base-100 rounded-t-none'>
                  <li>
                    <Link to='/Call-Girls-in-Delhi-Cantt'>Delhi Cantt</Link>
                  </li>
                  <li>
                    <Link to='/Call-Girls-in-Sarojini-nagar'>
                      Sarojini Nagar
                    </Link>
                  </li>
                  <li>
                    <Link to='/Call-Girls-in-Rajdhani-park'>Rajdhani park</Link>
                  </li>
                </ul>
              </details>
              <details>
                <summary className='p-2 font-semibold'>College Girls</summary>
                <ul className='p-2 bg-base-100 rounded-t-none'>
                  <li>
                    <Link to='/Call-Girls-in-Rajdhani-park'>Shivaji </Link>
                  </li>
                  <li>
                    <Link to='/Call-Girls-in-Nehru-place'>Nehru place</Link>
                  </li>
                  <li>
                    <Link to='/Call-Girls-in-Sunder-Nagar'>Sundar nagar</Link>
                  </li>
                  <li>
                    <Link to='/Call-Girls-in-Chandni-Chowk'>Chandni chowk</Link>
                  </li>
                </ul>
              </details>
            </ul>
          </div>
          <ul className='flex items-center gap-[1.5rem] header-navLinks'>
            <li>
              <NavLink to='/' className='font-semibold'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin' className='font-semibold'>
                Dashboard
              </NavLink>
            </li>
            <div className='dropdown dropdown-hover'>
              <div tabIndex={0} role='button' className='m-1 font-semibold '>
                Hot Girls<i className='fa-solid fa-caret-down ms-1'></i>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 font-semibold rounded-box w-52'
              >
                <li>
                  <Link to='/Call-Girls-in-New-Delhi'>New Delhi</Link>
                </li>
                <li>
                  <Link to='/Call-Girls-in-IIT-Delhi'>IIT Delhi</Link>
                </li>
              </ul>
            </div>
            <div className='dropdown dropdown-hover'>
              <div tabIndex={0} role='button' className='m-1 font-semibold '>
                Party Girls<i className='fa-solid fa-caret-down ms-1'></i>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 font-semibold rounded-box w-52'
              >
                <li>
                  <Link to='/Call-Girls-in-Delhi-Cantt'>Delhi Cantt</Link>
                </li>
                <li>
                  <Link to='/Call-Girls-in-Sarojini-nagar'>Sarojini Nagar</Link>
                </li>
                <li>
                  <Link to='/Call-Girls-in-Rajdhani-park'>Rajdhani park</Link>
                </li>
              </ul>
            </div>
            <div className='dropdown dropdown-hover'>
              <div tabIndex={0} role='button' className='m-1 font-semibold '>
                College Girls<i className='fa-solid fa-caret-down ms-1'></i>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 font-semibold rounded-box w-52'
              >
                <li>
                  <Link to='/Call-Girls-in-Rajdhani-park'>Shivaji station</Link>
                </li>
                <li>
                  <Link to='/Call-Girls-in-Nehru-place'>Nehru place</Link>
                </li>
                <li>
                  <Link to='/Call-Girls-in-Sunder-Nagar'>Sundar nagar</Link>
                </li>
                <li>
                  <Link to='/Call-Girls-in-Chandni-Chowk'>Chandni chowk</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
