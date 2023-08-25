import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/reservations.css';

const Reservations = () => {
  return (
    <div className='reservations-main-container'>
      <section className="reservations-nav-container">
        <NavPanel />
      </section>
      <section className="reservations-body">This is the Reservation page</section>
    </div>
  );
};

export default Reservations;
