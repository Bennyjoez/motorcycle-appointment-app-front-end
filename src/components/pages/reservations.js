import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  getReservations,
  markReservationsAsFetched,
} from '../../redux/reservation/reservationSlice';
import Navbar from '../navbar';
import '../../stylesheets/reservations.css';

const Reservations = () => {
  const user = useSelector((state) => state.state.sessions.user.id);
  const isLoggedIn = useSelector((state) => state.state.sessions.loggedIn);
  const motorcycles = useSelector(
    (state) => state.state.motorcycles.motorcycles,
  );
  const { reservation, reservationsFetched } = useSelector(
    (state) => state.state.reservations,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!reservationsFetched && isLoggedIn) {
      dispatch(getReservations(user));
      dispatch(markReservationsAsFetched());
    }

    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [dispatch, navigate, reservationsFetched, isLoggedIn, user]);

  const sortReservations = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  };

  const userReservations = reservation.filter(
    (reservation) => reservation.user_id === user,
  );
  const sortedReservations = userReservations.slice().sort(sortReservations);

  return (
    <div className="reservations-main-container">
      <Navbar />
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
                        <td>
                          {(() => {
                            const foundMotorcycle = motorcycles.find(
                              (motorcycle) => motorcycle.id === reservation.motorcycle_id,
                            );
                            let motorcycleName = '';
                            if (foundMotorcycle) {
                              motorcycleName = foundMotorcycle.name;
                            }
                            return motorcycleName;
                          })()}
                        </td>
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
                <Link to="/reserve" className="no-reservations-link">
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
