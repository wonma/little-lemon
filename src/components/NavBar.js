import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.Box}>
            <ul className={styles.theList}>
                <li className={styles.Item}><Link className={styles.aTag} to="/little-lemon">Home</Link></li>
                <li className={styles.Item}><Link className={styles.aTag} to="#">About</Link></li>
                <li className={styles.Item}><Link className={styles.aTag} to="#">Menu</Link></li>
                <li className={styles.Item}><Link className={styles.aTag} to="/booking">Reservations</Link></li>
                <li className={styles.Item}><Link className={styles.aTag} to="#">Order Online</Link></li>
                <li className={styles.Item}><Link className={styles.aTag} to="#">Login</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;