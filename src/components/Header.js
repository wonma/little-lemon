import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav className="header__primary-menu">
                <ul className="header__primary-menu-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
      </header>   
    );
}

export default Header;