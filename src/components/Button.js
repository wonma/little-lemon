import styles from './Button.module.scss';
import { Link } from 'react-router-dom';


const Button = ({buttonLink, children}) => {
    return (
        <Link to={buttonLink} role="button" className={styles.Link}>
            {children}
        </Link>
    );
}

export default Button;