import React, { useState } from 'react';
import NavPanel from './nav-panel';
import '../stylesheets/navbar.css';

const Navbar = () => {
  const [menuToggleState, setMenuToggleState] = useState('hide');

  const handleMenuToggle = () => {
    if (menuToggleState === 'hide') {
      setMenuToggleState('');
    } else {
      setMenuToggleState('hide');
    }
  };
  return (
    <div>
      <nav className="mobile-nav">
        <button
          type="button"
          onClick={handleMenuToggle}
          className="menu-toggle"
        >
          &#9776;
        </button>
      </nav>
      <section className={`navpanel-container ${menuToggleState}`}>
        <button
          type="button"
          onClick={handleMenuToggle}
          className={`close-btn ${menuToggleState}`}
        >
          &#10005;
        </button>
        <NavPanel />
      </section>
    </div>
  );
};

export default Navbar;
