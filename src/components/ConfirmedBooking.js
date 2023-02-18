// import { useEffect } from 'react';
// import { useBookingData } from '../context/BookingDataContext';

import FullScreenSection from './FullScreenSection';
import Button from './Button';
// import BookingDataDisplay from './BookingDataDisplay';
import styles from './ConfirmedBooking.module.scss';
import Hero from './Hero';

const ConfirmedBooking = () => {
  // const {bookingData, setBookingData} = useBookingData();

  // useEffect(()=>{
  //   const storedData = localStorage.getItem('BookingData');
  //   if(storedData !== null) {
  //     const data = JSON.parse(storedData);
  //     setBookingData({
  //       hasBookingData: true,
  //       currentBookingData: data
  //     })
  //   }
  // }, [])

    return (
      <main className={styles.Box}>
        <Hero 
          title="Booking Confirmation" 
          leadText="Your booking has been confirmed successfully!" 
          hasButton={false} 
          minHeight="30rem"
        />
        <FullScreenSection
            bgColor='#fff' 
            fontColor='#333' 
            bgImage='none'
        >
          <h2>Booking has been complete!</h2>
          <Button buttonLink='/booking'>Go to the Booking Page</Button>
          {/* { bookingData.hasBookingData && <BookingDataDisplay bookingData={bookingData.currentBookingData} /> } */}
        </FullScreenSection>
      </main>  
    );
}

export default ConfirmedBooking;