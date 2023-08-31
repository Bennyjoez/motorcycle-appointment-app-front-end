import React from 'react';
import '../../stylesheets/details.css';
import Navbar from '../navbar';

const Details = () => (
  <div className="details-main-container">
    <section className="details-nav-container">
      <Navbar />
    </section>
    <section className="details-body">This is the Details</section>
  </div>
);

export default Details;
