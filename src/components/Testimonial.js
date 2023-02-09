import styles from './Testimonial.module.scss';

const Testimonial = ({name, rating, photo, message}) => {
    return (
        <li className={styles.Item}>
            <p className={styles.Rating}>{rating}</p>
            <figure>
                <img src={photo} alt="Customer photo" className={styles.Image}/>
            </figure>
            <h3 className={styles.Name}>{name}</h3>
            <p className={styles.Message}>{message}</p>
        </li>
    );
}

export default Testimonial;