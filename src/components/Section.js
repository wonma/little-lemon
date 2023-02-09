// import React from 'react';
const styles = {
    padding: '4rem 1.6rem'
  }
  
// ***************** Need to decide how to structure container for shared styling.
const Section = ({children}) => {
    return (
        <section style={styles}>
            {children}
        </section>
    );
}

export default Section;