import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavPanel from '../nav-panel';
import '../../stylesheets/motorcycles.css';
import MotorCard from '../motor-card';
import { getMotorcycles } from '../../redux/motorcycles/motorcycleSlice';

const Motorcycles = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles);
  const [menuToggleState, setMenuToggleState] = useState('hide');

  useEffect(() => {
    dispatch(getMotorcycles());
  }, []);

  const handleMenuToggle = () => {
    if (menuToggleState === 'hide') {
      setMenuToggleState('');
    } else {
      setMenuToggleState('hide');
    }
  };
  return (
    <div className="motorcycles-main-container">
      <nav className="mobile-nav">
        <button type="button" onClick={handleMenuToggle} className="menu-toggle">
          &#9776;
        </button>
      </nav>
      <section
        className={`nav-container ${menuToggleState}`}
        id="nav-container"
      >
        <button
          type="button"
          onClick={handleMenuToggle}
          className={`close-btn ${menuToggleState}`}
        >
          &#10005;
        </button>
        <NavPanel />
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
                to="/motorcycles/details"
                className="card-link"
                key={motor.id}
              >
                <MotorCard name={motor.name} imgUrl={motor.image} />
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Motorcycles;
