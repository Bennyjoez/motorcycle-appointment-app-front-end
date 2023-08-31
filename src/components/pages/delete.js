import React from 'react';
import '../../stylesheets/delete.css';
import Navbar from '../navbar';

const Delete = () => (
  <div className="delete-main-container">
    <section className="delete-nav-container">
      <Navbar />
    </section>
    <section className="delete-body">This is the Delete page</section>
  </div>
);

export default Delete;
