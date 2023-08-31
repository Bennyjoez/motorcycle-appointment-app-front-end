import React from 'react';
import '../../stylesheets/reserve.css';
import Navbar from '../navbar';

const Reserve = () => (
  <div className="reserve-main-container">
    <section className="reserve-nav-container">
        <Navbar />
      </section>
    <section className="reserve-body">This is the Reserve page</section>
  </div>
);

export default Reserve;
