import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/motor-card.css';

const MotorCard = ({ name, imgUrl }) => (
  <div className="card-main-container">
    <img src={imgUrl} alt={`${name}_image`} width={250} height={250} className="card-img" />
    <div className="motor-name">{name}</div>
  </div>
);

MotorCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MotorCard;
