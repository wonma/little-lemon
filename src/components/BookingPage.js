import React, { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import styles from './BookingPage.module.scss';
import Hero from './Hero';

const BookingPage = () => {
  const initializeTimes = () => {return {availableTimes: ['19:00', '19:30']}} 

  const reducer = (state, action) => { //어떻게 할지 액션별 실행 공식을 자세히 써놓은 것.
    if(action.type == '03') {
      return { ...state, 
        availableTimes: [
          '19:00',
          '20:00'
        ]
      }
    } else if (action.type =='04') {
      return { ...state, 
      availableTimes: [
        '20:00',
        '20:30',
        '21:00'
      ]}
    }
  }

  const [ state, dispatch ] = useReducer(reducer, {}, initializeTimes)

  const updateTimes = (e) => {
    dispatch({type: e.target.value.split('-')[2]})
  }

  const renderTimeOptions = () => {
    console.log('state value: ', state.availableTimes)
    return state.availableTimes.map( (time) => <option key={time} value={time} data-testid="select-option">{time}</option> );
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
        availableTimes={state.availableTimes} 
        renderTimeOptions={renderTimeOptions} 
        updateTimes={updateTimes}
      />
    </main>  
  );
}

export default BookingPage;