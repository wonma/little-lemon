import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { submitAPI } from './capstoneAPI';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BookingDataProvider } from './context/BookingDataContext';


function App() {
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if(submitAPI(formData)) {
      let dataArray = [];
      if(localStorage.getItem('BookingData')) {
        dataArray = JSON.parse(localStorage.getItem('BookingData'))
      } 
      dataArray.push(formData)
      localStorage.setItem('BookingData', JSON.stringify(dataArray));
      navigate('/booking-confirmed', {replace: true})
    }
  }

  return (
    <React.Fragment>
      <BookingDataProvider>
        <Header />
        <Routes>
          <Route path="/little-lemon" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage submitForm={submitForm} />}></Route>
          <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
        <Footer />
      </BookingDataProvider>
    </React.Fragment>
  );
}

export default App;
