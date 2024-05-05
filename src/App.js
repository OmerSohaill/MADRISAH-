import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Nav from './com/nav'
import Home from './com/home.js'
import Contact from './com/contact.js';
import { useState } from 'react';
function App() {

  function receive() {
    console.log("msg is received");
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "#0E1630";
      document.body.style.color="#01D293"

    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color="black"
    }
  }
  
  return (
    <>
    <Router>
        <Nav re={receive}/>
     
        <Routes>
          <Route
            path="/home" 
            element={<Home cc={receive} />}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
          <Route
            path="/about"
            element={''}
            
          />
          <Route
            path="/contact"
            element={''}
            
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
