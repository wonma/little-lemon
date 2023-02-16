import React, { useReducer } from 'react';
import { fetchAPI } from '../capstoneAPI';

import BookingForm from './BookingForm';
import styles from './BookingPage.module.scss';
import Hero from './Hero';

const BookingPage = ({submitForm}) => {

  const initializeTimes = () => {
    const todaysTimes = fetchAPI(new Date())
    return {availableTimes: todaysTimes}
  } 

  const reducer = (state, action) => { //어떻게 할지 액션별 실행 공식을 자세히 써놓은 것.
    const availableTimes = fetchAPI( new Date(action.type));
    return { ...state, 
        availableTimes:availableTimes}
  }

  const [ state, dispatch ] = useReducer(reducer, {}, initializeTimes)

  const updateTimes = (e) => {
    dispatch({type: e.target.value})
  }

  const renderTimeOptions = () => {
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
      {2 === 2 ? <BookingForm 
                  availableTimes={state.availableTimes} 
                  renderTimeOptions={renderTimeOptions} 
                  updateTimes={updateTimes}
                  submitForm={submitForm}
                /> : ''}
    </main>  
  );
}

export default BookingPage;