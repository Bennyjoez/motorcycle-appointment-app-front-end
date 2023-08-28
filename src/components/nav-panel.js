import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav-panel.css';

const NavPanel = () => {
  return (
    <nav className="nav-panel-main-container">
      <div className="logo-container">logo</div>
      <ul className="nav-links-container">
        <li className="nav-link-container">
          <Link to="/motorcycles">Motorcyles</Link>
        </li>
        <li className="nav-link-container">
          <Link id='link' to="/reserve">Reserve</Link>
        </li>
        <li className="nav-link-container">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="nav-link-container">
          <Link to="/add-motorcycle">Add Motorcycle</Link>
        </li>
        <li className="nav-link-container">
          <Link to="/delete">Delete</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavPanel;
