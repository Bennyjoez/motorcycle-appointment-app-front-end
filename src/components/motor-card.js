import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/motor-card.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const MotorCard = ({ name, imgUrl, description }) => {
  const checkLen = (str) => {
    if (str.length > 50) {
      return `${str.slice(0, 50)}...`;
    }
    return str;
  };

  return (
    <div className="card-main-container">
      <img
        src={imgUrl}
        alt={`${name}_image`}
        width={250}
        height={250}
        className="card-img"
      />
      <div className="motor-name">{name}</div>
      <p className="card-description">{checkLen(description)}</p>
      <div className="icon-container">
        <span className="icons">
          <FaFacebookF />
        </span>
        <span className="icons">
          <FaTwitter />
        </span>
        <span className="icons">
          <ImInstagram />
        </span>
      </div>
    </div>
  );
};

MotorCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MotorCard;
