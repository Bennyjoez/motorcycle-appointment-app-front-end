import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import sessionsSlice from '../../redux/sessions/sessionsSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.sessions);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [validMsgState, setValidMsgState] = useState('');
  const [clickedState, setClickedState] = useState(false);
  const [validDisplayState, setValidDisplayState] = useState(false);

  const validate = () => {
    setClickedState(true);
    if (usernameState.length === 0) {
      setValidMsgState('Username field can not be empty');
      setValidDisplayState(true);
      setExistState(false);
    } else if (usernameState.length < 6) {
      setValidMsgState('Username must be at least 6 characters long');
      setValidDisplayState(true);
      setExistState(false);
    } else if (usernameState.length >= 6) {
      dispatch(sessionsSlice({ obj: { username: usernameState }, endpoint: 'register' }));
    }
  };

  const setUserName = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.logged_in === false) {
      if (clickedState) {
        setExistState(true);
        setValidDisplayState(false);
      }
    }
    if (userData.logged_in === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);
      localStorage.setItem('user', userData.user.username);
    }
    if (localStorage.getItem('logged_in') === 'true') {
      if (!userData) {
        dispatch(sessionsSlice({ obj: { username: usernameState }, endpoint: 'login' }));
      }
      navigate('/');
    }
  }, [userData.message, userData.loggedIn, navigate, dispatch, userData, clickedState]);

  return (
    <div className="container">
      <h5 className="card-title">Register</h5>
      <form action="" className="user-form flex">
        <input
          type="input"
          name="username"
          placeholder="Username"
          id="username"
          onChange={setUserName}
        />
        <div
          className="backend-error"
          style={{
            display: existState ? 'inherit' : 'none',
          }}
        >
          <p>{userData.message}</p>
        </div>
        <div
          className="error"
          style={{
            display: validDisplayState ? 'inherit' : 'none',
          }}
        >
          <p>{validMsgState}</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={validate}
        >
          Register
        </button>
        <Link to="/user/login">
          <p
            className="session-redirect"
          >
            <em>Already a member? Log in...</em>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
