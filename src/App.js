import './App.css';
import GuestMode from './pages/GuestMode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/Main/MainPage';

function App() {
  return (
    <>
      <Header />
      <Router>
        {/* <GuestMode /> */}
        <Routes>
          <Route path='/' element={<MainPage />} exact={true} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
