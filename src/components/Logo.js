import React from 'react';
import styles from './Logo.module.scss';
import LogoSVG from '../img/Logo.svg';

const Logo = () => {
    return (
        <figure className={styles.Box}>
            <a href="#" className={styles.Link}>
                <img src={LogoSVG} className={styles.Image}/>
            </a>
        </figure>
    )
}

export default Logo;