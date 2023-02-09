import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className={styles.FullWidth}>
            <div className={styles.Content}>
                <Logo />
                <NavBar />
            </div>
        </header>   
    );
}

export default Header;