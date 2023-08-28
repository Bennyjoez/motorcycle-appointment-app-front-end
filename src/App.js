import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/sessions/register';
import Login from './components/sessions/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
