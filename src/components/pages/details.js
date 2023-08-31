import React, { useState } from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/details.css';
import Navbar from '../navbar';

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
      <section className="details-nav-container">
        <Navbar />
      </section>
      <section className="details-body">This is the Details</section>
    </div>
  );
};

export default Details;
