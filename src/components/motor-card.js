import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/motor-card.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const MotorCard = ({ name, imgUrl, description }) => (
  <div className="card-main-container">
    <img
      src={imgUrl}
      alt={`${name}_image`}
      width={250}
      height={250}
      className="card-img"
    />
    <div className="motor-name">{name}</div>
    <p>{description}</p>
    <div className="icon-container">
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <ImInstagram />
      </a>
    </div>
  </div>
);

MotorCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MotorCard;
