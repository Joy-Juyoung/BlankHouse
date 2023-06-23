import './App.css';
// import GuestMode from './pages/GuestMode';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainHome/MainPage.js';

function App() {
  return (
    <>
      {/* <GuestMode /> */}
      <Header />
      <MainPage />
      {/* <Router>
        <Routes>
          <Route path='/' element={<MainPage />} exact={true} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
