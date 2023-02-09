import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';
import PrimaryNav from './PrimaryNav';

const Header = () => {
    return (
        <header className={styles.Container}>
            <Logo />
            <PrimaryNav />
        </header>   
    );
}

export default Header;