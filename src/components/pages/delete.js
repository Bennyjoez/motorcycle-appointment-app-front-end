import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/delete.css';

const Delete = () => {
  return (
    <div className="delete-main-container">
      <section className="delete-nav-container">
        <NavPanel />
      </section>
      <section className="delete-body">This is the Delete page</section>
    </div>
  );
};

export default Delete;
