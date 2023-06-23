import './App.css';
// import GuestMode from './pages/GuestMode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import GuestMode from './pages/GuestMode';
import MainPage from './pages/MainHome/MainPage';

// import MainPage from './pages/MainHome/MainPage.js';

function App() {
  return (
    <>
      <Router>
        <GuestMode />
      </Router>
      {/* <Header />
      <MainPage /> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<MainPage />} exact={true} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
