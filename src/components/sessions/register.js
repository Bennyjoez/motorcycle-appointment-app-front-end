import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postRegister } from '../../redux/sessions/sessionsSlice';
import { getMotorcycles } from '../../redux/motorcycles/motorcycleSlice';
import '../../stylesheets/register.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.state.sessions);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [validMsgState, setValidMsgState] = useState('');
  const [clickedState, setClickedState] = useState(false);
  const [validDisplayState, setValidDisplayState] = useState(false);

  const validate = () => {
    setClickedState(true);
    if (usernameState.length === 0) {
      setValidMsgState('Username field cannot be empty');
      setValidDisplayState(true);
      setExistState(false);
    } else if (usernameState.length < 6) {
      setValidMsgState('Username must be at least 6 characters long');
      setValidDisplayState(true);
      setExistState(false);
    } else if (usernameState.length >= 6) {
      dispatch(
        postRegister({
          obj: { username: usernameState },
          endpoint: 'register',
        }),
      );
    }
  };

  const setUserName = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.loggedIn === false) {
      if (clickedState) {
        setExistState(true);
        setValidDisplayState(false);
      }
    }
    if (userData.loggedIn === true) {
      setExistState(false);
    }
    if (userData.loggedIn) {
      if (!userData) {
        dispatch(
          postRegister({ obj: { username: usernameState }, endpoint: 'login' }),
        );
      }
      dispatch(getMotorcycles());
      navigate('/motorcycles');
    }
  }, [
    userData.message,
    userData.loggedIn,
    navigate,
    dispatch,
    userData,
    clickedState,
    usernameState,
  ]);

  return (
    <div className="container">
      <div className="backgrd-overlay">
        <h2 className="card-title">Register</h2>
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
          <button type="button" className="btn btn-primary" onClick={validate}>
            Register
          </button>
          <p className="session-redirect">
            <em>Already a member?</em>
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
