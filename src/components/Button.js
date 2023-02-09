import styles from './Button.module.scss';

const Button = ({children}) => {
    return (
        <a href="#" role="button" className={styles.Link}>
            {children}
        </a>
    );
}

export default Button;