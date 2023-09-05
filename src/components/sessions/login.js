import React, { useState, useEffect } from 'react';
import '../../stylesheets/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postRegister } from '../../redux/sessions/sessionsSlice';
import { getMotorcycles } from '../../redux/motorcycles/motorcycleSlice';

const Login = () => {
  const loggedUser = useSelector((state) => state.state.sessions);
  const [usernameState, setUsernameState] = useState('');
  const [validMsgState, setValidMsgState] = useState('');
  const [validMsgDisplayState, setValidMsgDisplayState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (e) => {
    e.preventDefault();
    if (usernameState.length === 0) {
      setValidMsgState('Username cannot be empty');
      setValidMsgDisplayState(true);
    } else {
      dispatch(
        postRegister({ obj: { username: usernameState }, endpoint: 'login' }),
      );
    }
  };

  const setUserName = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (loggedUser.loggedIn === true) {
      dispatch(getMotorcycles());
      navigate('/motorcycles');
    }
  }, [loggedUser.loggedIn, loggedUser.message, dispatch, navigate]);

  return (
    <div className="form-main-container">
      <div className="background-overlay">
        <h2 className="form-title">Login</h2>
        <form className="login-form-container">
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
