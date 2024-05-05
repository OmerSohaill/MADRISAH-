import React, { useState } from 'react';
import './nav.css'; // Import your custom CSS file
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import Contact from './contact';

function Nav(props) {
  // State to manage the visibility of links on mobile
  const [showLinks, setShowLinks] = useState(false);
  const changecolor=()=>{
    props.re();

  }
 
  

  // Function to toggle between English and Urdu


  return (
    <header className="text-gray-600 body-font header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Mosque icon */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <i className="fas fa-mosque" style={{ fontSize: '36px' }}></i>
          </a>

          {/* Hamburger menu button for mobile screens */}
          <button
            className="block md:hidden border border-solid border-gray-600 p-2 rounded"
            onClick={() => setShowLinks(!showLinks)}
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

        {/* Navigation links */}
        <nav
          className={`${
            showLinks ? 'flex' : 'hidden'
          } md:ml-auto md:flex md:flex-wrap items-center text-base justify-center w-full md:w-auto`}
        >
          <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to='/contact' className="mr-5 hover:text-gray-900">About</Link>
          <a className="mr-5 hover:text-gray-900">Login</a>
          <a className="mr-5 hover:text-gray-900">Resgistration</a>
          <a className="mr-5 hover:text-gray-900">Admin</a>
          <a className="mr-5 hover:text-gray-900"><i onClick={changecolor} class='fas fa-moon' style={{fontSize:'36px'}}></i></a>
          
          
        
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">English
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
      </div>
    </header>
  );
}

export default Nav;
