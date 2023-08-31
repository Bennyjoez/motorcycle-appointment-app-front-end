import React from 'react';
import NavPanel from '../nav-panel';
import '../../stylesheets/reserve.css';
import Navbar from '../navbar';

  return (
    <section className="reserve-motorcycle-page">
      <Navbar />
      <div className="reserve-main-container">
        <h1>HIRE A MOTOCYCLE</h1>

        <div className="reserve-page-divider" />
        <p>
          This app gives detailed information about the modern motorcycles which
          can be hired.
        </p>

        <form onSubmit={handleSubmit} className="reserve-form">
          <select
            defaultValue={chosenMotorcycleId || ""}
            name="motorcycle_id"
            id="motorcycle-drop-down"
            onChange={(e) => setMotorcycleIdState(e.target.value)}
          >
            <option value="">Select a motorcycle</option>
            <option value="1">Honda</option>
            <option value="2">Yamaha</option>
            <option value="3">Suzuki</option>
            <option value="4">Kawasaki</option>
            <option value="5">BMW</option>
            <option value="6">Ducati</option>
            <option value="7">Triumph</option>
            <option value="8">KTM</option>
            <option value="9">Harley-Davidson</option>
            <option value="10">Royal Enfield</option>
          </select>

          <select
            name="city"
            id="city-dropdown"
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
            name="date"
            min={getCurrentDate()}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            name="status"
            id="status-dropdown"
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

        <div className={`popup-message ${created ? "" : "hidden"}`}>
          <p>Reservation has been created successfully!</p>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
