import React, { useState, useEffect } from 'react';
import '../../stylesheets/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postRegister } from '../../redux/sessions/sessionsSlice';

const Login = () => {
  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [clickedState, setClickedState] = useState(false);
  const [validMsgDisplayState, setValidMsgDisplayState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.sessions);
  console.log(userData);

  const userDispatch = () => {
    setClickedState(true);
    if (usernameState.length === 0) {
      setValidMsgDisplayState(true);
      setExistState(false);
    } else {
      dispatch(postRegister({ obj: { username: usernameState }, endpoint: 'login' }));
    }
  };

  const setUsername = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.loggedIn === false) {
      if (clickedState) {
        setExistState(true);
        setValidMsgDisplayState(false);
      }
    }
    if (userData.loggedIn === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);

      localStorage.setItem('userId', JSON.stringify(userData.user.id));
    }
    if (localStorage.getItem('logged_in') === 'true') {
      if (!userData) {
        dispatch(postRegister({ obj: { username: usernameState }, endpoint: 'login' }));
      }
      navigate('/motorcycles');
    }
  }, [userData.message,
    userData.loggedIn, navigate, dispatch, userData, clickedState]);

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
              onChange={setUsername}
            />
            <div
              className="error"
              style={{
                display: existState ? 'inherit' : 'none',
              }}
            >
              <p>{userData ? userData.message : 'Something went wrong'}</p>
            </div>
            <div
              className="error"
              style={{
                display: validMsgDisplayState ? 'inherit' : 'none',
              }}
            >
              <p>Username field can not be empty</p>
            </div>
          </div>
          <button
            type="button"
            name="login"
            className="login-btn"
            onClick={userDispatch}
          >
            Log In
          </button>
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
