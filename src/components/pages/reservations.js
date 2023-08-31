import React from "react";
import "../../stylesheets/reservations.css";
import Navbar from "../navbar";

const Reservations = () => (
  <div className="reservations-main-container">
    <section className="reservations-nav-container">
      <Navbar />
    </section>
    <section className="reservations-body">
      This is the Reservation page
    </section>
  </div>
);

export default Reservations;
