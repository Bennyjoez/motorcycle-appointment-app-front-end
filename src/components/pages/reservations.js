import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getReservations } from '../../redux/reservation/reservationSlice';
import NavPanel from '../nav-panel';
import '../../stylesheets/reservations.css';

const Reservations = () => {
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));
  const user = JSON.parse(window.localStorage.getItem('user'));
  const { reservationsList } = useSelector((state) => state.reservations);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/user/login');
      }, 2000);
    }
  }, [dispatch, isLoggedIn, navigate]);

  const sortReservations = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  };

  const userReservations = reservationsList.filter(
    (reservation) => reservation.user_id === user.id,
  );
  const sortedReservations = userReservations.slice().sort(sortReservations);

  return (
    <div className="reservations-main-container">
      <NavPanel />
      <div className="reservations-container">
        {isLoggedIn ? (
          <div className="reservations-list-container">
            <h1 className="reservations-title">My Reservations</h1>
            {sortedReservations.length !== 0 ? (
              <div className="reservations-list">
                <p className="next-appointment-info">
                  Your next appointment is on
                  {' '}
                  {new Date(sortedReservations[0].date)
                    .toUTCString()
                    .substring(0, 16)}
                  {' '}
                  in
                  {' '}
                  {sortedReservations[0].city}
                  {' '}
                  with
                  {' '}
                  {sortedReservations[0].motorcycle}
                </p>
                <table className="reservations-table">
                  <thead>
                    <tr>
                      <th>Motorcycle Name</th>
                      <th>City</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedReservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td>{reservation.motorcycle}</td>
                        <td>{reservation.city}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="no-reservations-container">
                <p className="no-reservations-msg">You have no reservations</p>
                <Link to="/motorcycles" className="no-reservations-link">
                  Click here to reserve a motorcycle
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="popup_msg">
            <p className="popup_msg_text">
              You need to be logged in to see your reservations
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;
