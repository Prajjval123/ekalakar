import React, { useState } from 'react';
import './sidebar.css'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
      <div className="logo">Your Logo</div>
      <nav className="nav-items">
        <a href="#">Dashboard</a>
        <a href="#">Manage Users</a>
        <a href="#">Manage Profiles</a>
      </nav>
      <div className="user-dropdown">
        <span>User</span>
        <div className="dropdown-content">
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
