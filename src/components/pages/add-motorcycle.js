import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/add-motorcycle.css'

const AddMotorcycle = () => {
  return (
    <div className='add-motor-main-container'>
      <section className="add-motor-nav-container">
        <NavPanel />
      </section>
      <section className="add-motor-body">This is the Add motorcycle page</section>
    </div>
  );
};

export default AddMotorcycle;
