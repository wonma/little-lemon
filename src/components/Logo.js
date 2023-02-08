import React from 'react';
import LogoImage from '../img/Logo.svg';

const Logo = () => {
    return (
        <a href="#" class="logo">
            <img src={LogoImage} class="logo__img"/>
        </a>
    )
}

export default Logo;