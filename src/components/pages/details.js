import React, { useEffect } from 'react';
import '../../stylesheets/details.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GrCaretPrevious } from 'react-icons/gr';
import Navbar from '../navbar';
import { getMotorcycles } from '../../redux/motorcycles/motorcycleSlice';

const Details = () => {
  const motorId = parseInt(useParams().id, 10);
  const { dispatch } = useDispatch();
  const { motorcycles } = useSelector((state) => state.motorcycles);

  const filtered = motorcycles.filter((cycle) => cycle.id === motorId);

  useEffect(() => {
    if (motorcycles.length === 0) {
      dispatch(getMotorcycles);
    }
  }, []);
  return (
    <div className="details-main-container">
      <section className="details-nav-container">
        <Navbar />
      </section>
      <section className="details-body">
        <Link to="/motorcycles" className="details-back-btn">
          <GrCaretPrevious />
        </Link>
        <div className="details-img-container">
          <img
            className="details-img"
            src={filtered[0].image}
            alt={`${filtered[0].name}_image`}
          />
          <p>{filtered[0].description}</p>
        </div>
        <div className="motor-details-reserve-btn-container">
          <h3 className="motor-name">{filtered[0].name}</h3>
          <ul className="motor-details-container">
            <li className="amt-list">
              <p>Amount payable</p>
              <span>{filtered[0].amount}</span>
            </li>
            <li className="amt-duration">
              <p>Duration</p>
              <span>{filtered[0].duration}</span>
            </li>
          </ul>
          <button className="reserve-btn">Reserve</button>
        </div>
      </section>
    </div>
  );
};

export default Details;
