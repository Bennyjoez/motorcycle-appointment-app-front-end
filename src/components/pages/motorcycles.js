import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../stylesheets/motorcycles.css';
import MotorCard from '../motor-card';
import Navbar from '../navbar';

const Motorcycles = () => {
  const motorcycles = useSelector((state) => state.state.motorcycles);

  return (
    <div className="motorcycles-main-container">
      <section className="nav-container">
        <Navbar />
      </section>
      <section className="page-body">
        <div className="title-container">
          <h2>Latest Model</h2>
          <p>please select your choice</p>
        </div>
        <div className="motorcycles-container">
          {motorcycles.message === 'loading' ? (
            <div className="loading-msg"> Loading...</div>
          ) : (
            motorcycles.motorcycles.map((motor) => (
              <Link
                to={`/motorcycles/${motor.id}/details`}
                className="card-link"
                key={motor.id}
              >
                <MotorCard
                  name={motor.name}
                  imgUrl={motor.image}
                  description={motor.description}
                />
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Motorcycles;
