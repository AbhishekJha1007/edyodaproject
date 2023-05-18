// src/Header.js

import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a className="navbar-item" >
             
          </a>
          <a className="navbar-item" >
             
          </a>
          <a className="navbar-item" href="https://www.edyoda.com/">
             <span className="logo">EDYODA</span> 
          </a>
        
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          <a className="navbar-item" >
             
             </a>
             <a className="navbar-item" >
                
             </a>
          <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Courses</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
            <a className="navbar-item" >
             
             </a>
             <a className="navbar-item" >
                
             </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Programs</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
          <div className="navbar-item">
            <a className=" text is-small">
                  Log in
                </a>
                </div>
            <div className="navbar-item">
              <div className="buttons">
                
                <a className="button is-rounded is-captalized is-small custom-button text-is-white">Join Now</a>
              </div>
            </div>
            <a className="navbar-item" >
             
             </a>
             <a className="navbar-item" >
                
             </a> <a className="navbar-item" >
             
             </a>
             <a className="navbar-item" >
                
             </a>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
