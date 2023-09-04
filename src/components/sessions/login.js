import React, { useState, useEffect } from 'react';
import '../../stylesheets/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postRegister } from '../../redux/sessions/sessionsSlice';
import { getMotorcycles } from '../../redux/motorcycles/motorcycleSlice';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.sessions);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [clicked, setClickedState] = useState(false);
  const [validMsgDisplayState, setValidDisplayState] = useState(false);
  const [validMsgState, setValidMsgState] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (e) => {
    e.preventDefault();
    if (usernameState.length === 0) {
      setValidDisplayState(true);
      setExistState(false);
      setValidMsgState('Username cannot be empty');
      setValidMsgDisplayState(true);
    } else {
      dispatch(
        postRegister({ obj: { username: usernameState }, endpoint: 'login' }),
      );
    }
  };

  const setUsername = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.logged_in === false) {
      if (clicked) {
        setExistState(true);
        setValidDisplayState(false);
      }
    }
    if (userData.logged_in === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);

      localStorage.setItem('user', userData.user.user.id);
    }
    if (localStorage.getItem('logged_in') === 'true') {
      if (!userData) {
        dispatch(
          postRegister({ obj: { username: usernameState }, endpoint: 'login' }),
        );
      }
      navigate('/motorcycles');
    }
  }, [
    userData.message,
    userData.logged_in,
    navigate,
    dispatch,
    userData,
    clicked,
  ]);

  return (
    <div className="form-main-container">
      <div className="background-overlay">
        <h2 className="form-title">Login</h2>
        <form className="form-container">
          <div className="name-input-msg-container">
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="name-input"
              value={usernameState}
              onChange={setUserName}
            />
            <div
              className="error"
              style={{
                display: validMsgDisplayState ? 'inherit' : 'none',
              }}
            >
              <p>{validMsgState}</p>
            </div>
          </div>

          <input
            type="submit"
            value="Login"
            className="login-btn"
            onClick={(e) => validate(e)}
          />
          <div className="register-section">
            <em className="login-note">Have no account ?</em>
            <Link to="/" className="register-link">
              register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
