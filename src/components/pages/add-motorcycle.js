import React from 'react';
import '../../stylesheets/add-motorcycle.css';
import AddMotorcycleForm from '../add_motorcycle_form';
import Navbar from '../navbar';

const AddMotorcycle = () => (
  <div className="add-motor-main-container">
    <section className="add-motor-nav-container">
      <Navbar />
    </section>
    <section className="add-motor-body">
      <AddMotorcycleForm />
    </section>
  </div>
);

export default AddMotorcycle;
