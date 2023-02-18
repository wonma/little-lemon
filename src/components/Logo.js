import React from 'react';
import styles from './Logo.module.scss';
import LogoSVG from '../img/Logo.svg';
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <figure className={styles.Box}>
            <Link to="/little-lemon" className={styles.Link}>
                <img src={LogoSVG} className={styles.Image} alt="logo" />
            </Link>
        </figure>
    )
}

export default Logo;