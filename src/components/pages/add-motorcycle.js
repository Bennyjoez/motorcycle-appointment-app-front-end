import React from 'react';
import '../../stylesheets/add-motorcycle.css';
import Navbar from '../navbar';

const AddMotorcycle = () => (
  <div className="add-motor-main-container">
    <section className="add-motor-nav-container">
      <Navbar />
    </section>
    <section className="add-motor-body">This is the Add motorcycle page</section>
  </div>
);

export default AddMotorcycle;
