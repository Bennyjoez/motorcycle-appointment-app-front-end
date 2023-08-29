import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/reserve.css';

const Details = () => (
  <div className="reserve-main-container">
    <section className="reserve-nav-container">
      <NavPanel />
    </section>
    <section className="reserve-body">This is the Details</section>
  </div>
);

export default Details;
