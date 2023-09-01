/* eslint-disable arrow-body-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logOut } from '../redux/sessions/sessionsSlice';
import '../stylesheets/navpanel.css';

const NavPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

  const clearUserData = () => {
    localStorage.clear();
    dispatch(logOut());
    navigate('/');
  };
  return (
    <nav className="nav-panel-main-container">
      <div className="logo-container">logo</div>

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
        <div>
          {isLoggedIn && (
            <button
              className="logout-btn"
              type="button"
              onClick={clearUserData}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavPanel;
