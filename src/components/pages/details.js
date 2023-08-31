import React, { useState } from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/details.css';

const Details = () => {
  const [menuToggleState, setMenuToggleState] = useState('hide');

  const handleMenuToggle = () => {
    if (menuToggleState === 'hide') {
      setMenuToggleState('');
    } else {
      setMenuToggleState('hide');
    }
  };
  return (
    <div className="details-main-container">
      <nav className="details-mobile-nav">
        <button
          type="button"
          onClick={handleMenuToggle}
          className="details-menu-toggle"
        >
          &#9776;
        </button>
      </nav>
      <section className={`details-nav-container ${menuToggleState}`}>
        <button
          type="button"
          onClick={handleMenuToggle}
          className={`close-btn ${menuToggleState}`}
        >
          &#10005;
        </button>
        <NavPanel />
      </section>
      <section className="details-body">This is the Details</section>
    </div>
  );
};

export default Details;
