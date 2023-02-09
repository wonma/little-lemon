import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/little-lemon" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
