import React from 'react';
import styles from './ConfirmedBooking.module.scss';
import Hero from './Hero';

const ConfirmedBooking = () => {
    return (
      <main className={styles.Box}>
        <Hero 
          title="Booking Confirmation" 
          leadText="Your booking has been confirmed successfully!" 
          hasButton={false} 
          minHeight="30rem"
        />
        <div>Booing has been confirmed!</div>
      </main>  
    );
}

export default ConfirmedBooking;