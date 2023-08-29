import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/motorcycles.css';
import MotorCard from '../motor-card';
import motorImg from '../../motor_img.png';

const Motorcycles = () => {
  return (
    <div className='motocycles-main-container'>
      <section className="nav-container">
        <NavPanel />
      </section>
      <section className="page-body">This is motorcycles page</section>
    </div>
  );
};

export default Motorcycles;
