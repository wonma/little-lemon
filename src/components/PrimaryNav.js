import styles from './PrimaryNav.module.scss';

const PrimaryNav = () => {
    return (
        <nav className={styles.Box}>
            <ul className={styles.List}>
                <li className={styles.Item}><a className={styles.Link} href="#">Home</a></li>
                <li className={styles.Item}><a className={styles.Link} href="#">About</a></li>
                <li className={styles.Item}><a className={styles.Link} href="#">Menu</a></li>
                <li className={styles.Item}><a className={styles.Link} href="#">Reservations</a></li>
                <li className={styles.Item}><a className={styles.Link} href="#">Order Online</a></li>
                <li className={styles.Item}><a className={styles.Link} href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default PrimaryNav;