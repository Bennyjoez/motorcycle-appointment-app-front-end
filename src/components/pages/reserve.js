import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  createMsgAction,
  postReservation,
} from '../../redux/reservation/reservationSlice';
import '../../stylesheets/reserve.css';
import Navbar from '../navbar';

const Reservations = () => {
  const { motorcycles } = useSelector((state) => state.state.motorcycles);
  const createmsg = useSelector((state) => state.sessions);
  const user = useSelector((state) => state.state.sessions.user.id);
  const isLoggedIn = useSelector((state) => state.state.sessions.loggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { chosenMotorcycleId = -1 } = location.state || {};

  const [motorcycleIdState, setMotorcycleIdState] = useState(chosenMotorcycleId);

  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }

    if (createmsg === 'success') {
      setCreated(true);
      setErrorMessage('');
      setErrorMessage('');
      dispatch(createMsgAction());
      setTimeout(() => {
        navigate('/reservations');
      }, 2500);
    }
    if (createmsg === '') {
      setErrorMessage(
        "Oops! Reservation couldn't be created. Can't reserve the same motorcycle on the same day.",
      );
      dispatch(createMsgAction());
    }
  }, [createmsg, created, dispatch, isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return (
      <div className="popup-message">
        <p>Please log in to access this page</p>
      </div>
    );
  }

  const cities = [
    // Cities from Nigeria
    'Lagos',
    'Abuja',
    'Kano',
    'Ibadan',
    'Port Harcourt',
    'Benin City',
    'Kaduna',
    'Enugu',
    'Abeokuta',
    'Onitsha',

    // Cities from Kenya
    'Nairobi',
    'Mombasa',
    'Kisumu',
    'Nakuru',
    'Eldoret',
    'Thika',
    'Malindi',
    'Kakamega',
    'Meru',
    'Nyeri',

    // Cities from Ghana
    'Accra',
    'Kumasi',
    'Tamale',
    'Takoradi',
    'Cape Coast',
    'Sekondi-Takoradi',
    'Ho',
    'Koforidua',
    'Wa',
    'Sunyani',

    // Cities from India
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
  ];

  const statusOption = ['Confirmed', 'Not confirmed'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      motorcycleIdState === -1
      || date === ''
      || city === ''
      || status === ''
    ) {
      setErrorMessage('Please fill all fields');
    }
    const reservation = {
      motorcycle_id: motorcycleIdState,
      user_id: user,
      date,
      city,
      status,
    };
    dispatch(postReservation(reservation));
    navigate('/reservations');
  };

  const getCurrentDate = () => new Date().toJSON().slice(0, 10);

  return (
    <section className="reserve-motorcycle-page">
      <section className="reserve-nav-container">
        <Navbar />
      </section>
      <div className="reserve-main-container">
        <h1>HIRE A MOTOCYCLE</h1>

        <div className="reserve-page-divider" />
        <p>
          This app gives detailed information about the modern motorcycles which
          can be hired.
        </p>

        <form onSubmit={handleSubmit} className="reserve-form">
          <select
            defaultValue={chosenMotorcycleId || ''}
            name="motorcycle_id"
            id="motorcycle-drop-down"
            data-testid="motorcycle-drop-down"
            onChange={(e) => setMotorcycleIdState(e.target.value)}
          >
            <option value="">Select a motorcycle</option>
            {motorcycles.map((motorcycle) => (
              <option
                key={motorcycle.id + motorcycle.name}
                value={motorcycle.id}
              >
                {motorcycle.name}
              </option>
            ))}
          </select>

          <select
            name="city"
            id="city-dropdown"
            data-testid="city-dropdown"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <input
            type="date"
            id="date-picker"
            data-testid="date-picker"
            name="date"
            min={getCurrentDate()}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            name="status"
            id="status-dropdown"
            data-testid="status-dropdown"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select a status</option>
            {statusOption.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <p className="error-messages">{errorMessage}</p>
          <input type="submit" value="Book Now" />
        </form>

        <div className={`popup-message ${created ? '' : 'hidden'}`}>
          <p>Reservation has been created successfully!</p>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
