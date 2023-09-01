/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navpanel.css';
import logo from '../logo.png';

const NavPanel = () => {
  return (
    <nav className="nav-panel-main-container">
      <div className="logo-container">
        <img src={logo} alt="logo" width={100} />
      </div>

      <div className="nav-links-container">
        <Link to="/motorcycles" className="nav-link">
          Motorcyles
        </Link>
        <Link to="/reserve" className="nav-link">
          Reserve
        </Link>
        <Link to="/reservations" className="nav-link">
          Reservations
        </Link>
        <Link to="/add-motorcycle" className="nav-link">
          Add Motorcycle
        </Link>
        <Link to="/delete" className="nav-link">
          Delete
        </Link>
      </div>
    </nav>
  );
};

export default NavPanel;
