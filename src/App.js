import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/sessions/register';
import Login from './components/sessions/login';
import Motorcycles from './components/pages/motorcycles';
import Reservations from './components/pages/reservations';
import AddMotorcycle from './components/pages/add-motorcycle';
import Delete from './components/pages/delete';
import Reserve from './components/pages/reserve';
import Details from './components/pages/details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/motorcycles/details" element={<Details />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
