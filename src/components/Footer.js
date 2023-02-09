import React from 'react';
import Logo from './Logo';
import VSpreadMenu from './VSpreadMenu';
import styles from './Footer.module.scss';

const menuList = {
    list1: {
        heading: 'Site Menu',
        links: [
            {
                label: 'Home',
                url: '#'
            },
            {
                label: 'About',
                url: '#'
            },
            {
                label: 'Menu',
                url: '#'
            },
            {
                label: 'Reservation',
                url: '#'
            },
            {
                label: 'Online Order',
                url: '#'
            },
            {
                label: 'Login',
                url: '#'
            }
        ]
    },

    list2: {
        heading: 'Second Menu',
        links: [
            {
                label: 'Item1',
                url: '#'
            },
            {
                label: 'Item2',
                url: '#'
            },
            {
                label: 'Item3',
                url: '#'
            }
        ]
    },

    list3: {
        heading: 'Third Menu',
        links: [
            {
                label: 'Item1',
                url: '#'
            },
            {
                label: 'Item2',
                url: '#'
            },
            {
                label: 'Item3',
                url: '#'
            }
        ]
    }
}

const Footer = () => {
    return (
        <footer className={styles.FullWidth}>
            <div className={styles.Content}>
                <Logo />
                <div className={styles.Columns}>
                    <VSpreadMenu columnMenuData={menuList.list1} />
                    <VSpreadMenu columnMenuData={menuList.list2} />
                    <VSpreadMenu columnMenuData={menuList.list3} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;