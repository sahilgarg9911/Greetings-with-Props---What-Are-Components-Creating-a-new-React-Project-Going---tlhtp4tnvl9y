import React from 'react';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
      <i className="sidebaricon fa fa-bars"></i>
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep Logo" />
        <h1>Keep</h1>
        
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search" className='searchbar' />
        <i className="fa fa-search" ></i>
      </div>
      <div className="navbar__buttons">
        <button className="navbar__button">
          <i className="material-icons"><i className="fa fa-refresh fa-spin" ></i></i>
        </button>
        <button className="navbar__button">
          <i className="material-icons">list</i>
        </button>
        <button className="navbar__button">
          <i className="material-icons"><i className="fa fa-cog"></i></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
