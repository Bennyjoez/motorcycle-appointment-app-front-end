import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/motorcycles.css';

const Motorcycles = () => (
  <div className="motocycles-main-container">
    <section className="nav-container">
      <NavPanel />
    </section>
    <section className="page-body">This is motorcycles page</section>
  </div>
);

export default Motorcycles;
