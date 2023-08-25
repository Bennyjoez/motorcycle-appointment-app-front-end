import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/sessions/register';
import './App.css';
import Register from './components/session/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
