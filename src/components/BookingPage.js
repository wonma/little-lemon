import React, { useState } from 'react';
import BookingForm from './BookingForm';
import styles from './BookingPage.module.scss';
import Hero from './Hero';

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00'
  ])

  const renderTimeOptions = () => {
      return availableTimes.map( (time) => <option value={time}>{time}</option> );
  }

  const updateTimes = (newAvailableTimes) => {
    setAvailableTimes([ ...newAvailableTimes])
  }

  return (
    <main className={styles.Box}>
      <Hero 
        title="Book a Table" 
        leadText="Enjoy dining with ease" 
        hasButton={false}
        minHeight="30rem" 
      />
      <BookingForm 
        availableTimes={availableTimes} 
        renderTimeOptions={renderTimeOptions} 
        updateTimes={updateTimes}
      />
    </main>  
  );
}

export default BookingPage;