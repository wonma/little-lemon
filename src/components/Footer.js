import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer class="footer">
            <Logo />
            <div class="footer__menus">
                <nav aria-label="Site Menu">
                    <ul>
                    <h3>Site Menu</h3> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                <nav aria-label="Contact Menu">
                    <ul>
                    <h3>Contact</h3> 
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                    </ul>
                </nav>
                <nav aria-label="Social Media Link">
                    <ul>
                    <h3>Social Media</h3> 
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;