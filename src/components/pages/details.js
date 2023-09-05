import React from 'react';
import '../../stylesheets/details.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GrCaretPrevious } from 'react-icons/gr';
import Navbar from '../navbar';

const Details = () => {
  const motorId = parseInt(useParams().id, 10);
  const { motorcycles } = useSelector((state) => state.state.motorcycles);

  const filtered = motorcycles.filter((cycle) => cycle.id === motorId);
  return (
    <div className="details-main-container">
      <section className="details-nav-container">
        <Navbar />
      </section>
      <section className="details-body">
        <div className="inner-body">
          <div className="details-img-container">
            <img
              className="details-img"
              src={filtered[0].image}
              alt={`${filtered[0].name}_image`}
            />
            <p>{filtered[0].description}</p>
          </div>

          <div className="motor-info-reserve-btn-container">
            <h3 className="details-motor-name">{filtered[0].name}</h3>
            <ul className="motor-details-container">
              <li className="amt-list">
                <p>Amount payable</p>
                <span>{`$ ${filtered[0].amount}`}</span>
              </li>
              <li className="amt-duration">
                <p>Duration</p>
                <span>{`${filtered[0].duration} month(s)`}</span>
              </li>
            </ul>
            <Link
              className="reserve-btn"
              to="/reserve"
              state={{ chosenMotorcycleId: filtered[0].id }}
            >
              Reserve
            </Link>
          </div>
        </div>

        <div className="details-back-btn-container">
          <Link to="/motorcycles" className="details-back-btn">
            <GrCaretPrevious className="back-btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Details;
