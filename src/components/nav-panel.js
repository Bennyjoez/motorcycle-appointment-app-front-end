import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { logOut } from '../redux/sessions/sessionsSlice';
import '../stylesheets/navpanel.css';
import logo from '../logo.png';

const NavPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.state.sessions.loggedIn);

  const clearUserData = () => {
    sessionStorage.clear();
    dispatch(logOut());
    navigate('/');
  };
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
      <div className="icon-container">
        <a href="https://web.facebook.com/?_rdc=1&_rdr" target="blank">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/" target="blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <ImInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavPanel;
