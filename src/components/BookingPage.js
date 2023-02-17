import React, { useReducer, useEffect, useState } from 'react';
import { fetchAPI } from '../capstoneAPI';
import BookingDataDisplay from './BookingDataDisplay';
import { useBookingData } from '../context/BookingDataContext';

import BookingForm from './BookingForm';
import styles from './BookingPage.module.scss';
import Hero from './Hero';

const BookingPage = ({submitForm}) => {
  const {bookingData, setBookingData} = useBookingData();

  console.log('hasBookingData: ', bookingData.hasBookingData)
  useEffect(()=>{
    const storedData = localStorage.getItem('BookingData');
    if(storedData !== null) {
      const data = JSON.parse(storedData);
      setBookingData({
        hasBookingData: true,
        currentBookingData: data
      })
    }
  }, [])

  // --------------  useReducer Starts 
  const initializeTimes = () => {
    const todaysTimes = fetchAPI(new Date())
    return {availableTimes: todaysTimes}
  } 

  const reducer = (state, action) => {
    const availableTimes = fetchAPI(new Date(action.type));
    return { ...state, 
        availableTimes:availableTimes}
  }

  const [ state, dispatch ] = useReducer(reducer, {}, initializeTimes)

  const updateTimes = (e) => {
    dispatch({type: e.target.value})
  }
  // --------------  useReducer Ends 

  return (
    <main className={styles.Box}>
      <Hero 
        title="Book a Table" 
        leadText="Enjoy dining with ease" 
        hasButton={false}
        minHeight="30rem" 
      />
      { bookingData.hasBookingData && <BookingDataDisplay bookingData={bookingData.currentBookingData} /> }
      <BookingForm 
        availableTimes={state.availableTimes} 
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </main>  
  );
}

export default BookingPage;