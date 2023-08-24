import React from 'react';
import '../../stylesheets/login.css';

export default function Login() {
  return (
    <div className="form-main-container">
      <div className="background-overlay">
        <form className="form-container">
          <label className="name-label" htmlFor="name">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter username"
            className="name-input"
          />
          <input type="submit" value="Login" className="login-btn" />
          <div className="register-section">
            <span className="login-note">Don't have an account?</span>
            <a href="#" className="register-link">
              register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
