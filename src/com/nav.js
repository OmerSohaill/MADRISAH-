import React, { useState } from 'react';
import './nav.css'; // Import your custom CSS file
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import Contact from './contact';

function Nav(props) {
  // State to manage the visibility of links on mobile
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
    document.body.style.overflow = showLinks ? 'auto' : 'hidden';
  };

  const changecolor = () => {
    props.re();
  };

  return (
    <header className="text-gray-600 body-font header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <i className="fas fa-mosque" style={{ fontSize: '36px' }}></i>
          </a>

          <button
            className="block md:hidden border border-solid border-gray-600 p-2 rounded"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <nav className={`${showLinks ? 'flex' : 'hidden'} md:ml-auto md:flex md:flex-wrap items-center text-base justify-center w-full md:w-auto navb`}>
          <Link to="/home" className="mr-5 hover:text-gray-900 nv">
            Home
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900 nv">
            Contact Us
          </Link>
          <a className="mr-5 hover:text-gray-900 nv">Login</a>
          <Link to="/registration" className="mr-5 hover:text-gray-900 navr nv">
            Resgistration
          </Link>
          <a className="mr-5 hover:text-gray-900 nv">Admin</a>
          <a className="mr-5 hover:text-gray-900 nv">
            <i onClick={changecolor} class="fas fa-moon" style={{ fontSize: '36px' }}></i>
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          English
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Nav;
