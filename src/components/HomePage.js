import React from 'react';
import styles from './HomePage.module.scss';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutBusiness from './AboutBusiness';

const HomePage = () => {
    return (
      <main className={styles.Box}>
        <Hero 
          title="Little Lemon" 
          leadText="We are a family-owned Mediterrian restaurant with a modern twist." 
          hasButton={true} 
          buttonLink="/booking"
          button="Reserve a Table"
          minHeight="30rem"
        />
        <Specials />
        <Testimonials />
        <AboutBusiness />
      </main>  
    );
}

export default HomePage;