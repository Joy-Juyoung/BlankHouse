import './App.css';
import GuestMode from './pages/GuestMode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <GuestMode />
      </Router>
    </>
  );
}

export default App;
