import React from 'react';
import styles from './Main.module.scss';
import Section from './Section';

const Main = () => {
    return (
      <main class={styles.Box}>
        <Section>
          <h1>Little Lemon <span>Chicago</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" role="button">Reserve a Table</a>
        </Section>
      </main>  
    );
}

export default Main;