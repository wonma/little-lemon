import React from 'react';
import styles from './BookingPage.module.scss';
import Hero from './Hero';

const BookingPage = () => {
    return (
      <main className={styles.Box}>
        <Hero 
          title="Book a Table" 
          leadText="Enjoy dining with ease" 
          hasButton={false}
          minHeight="30rem" 
        />
      </main>  
    );
}

export default BookingPage;