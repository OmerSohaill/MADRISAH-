import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [navStyle, setNavStyle] = useState({});

  const handleHover = () => {
    setNavStyle({ display: 'none' });
  };

  const handleMouseLeave = () => {
    setNavStyle({ fontSize: '16px' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top head" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='navimg' src="https://media.istockphoto.com/id/1585278298/vector/islamic-mosque-building-isolated-on-white-backbround.jpg?s=612x612&w=0&k=20&c=oQsST-hW4ZU_vrX6cnvvUz313d7Q0crq3_RHeaqvJnQ=" alt="mosque"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page" style={navStyle}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="registration" className="nav-link navreg animated navreg" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Registrations</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-disabled="true" style={navStyle} >Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active" aria-disabled="true" style={navStyle}>Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
