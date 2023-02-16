import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { submitAPI } from './capstoneAPI';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if(submitAPI(formData)) {
      navigate('/booking-confirmed', {replace: true})
    }
  }

  return (
    <React.Fragment>
        <Header />
        <Routes>
          <Route path="/little-lemon" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage submitForm={submitForm} />}></Route>
          <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
