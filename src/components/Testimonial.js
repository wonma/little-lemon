import styles from './Testimonial.module.scss';
import { ReactComponent as Star } from '../img/star.svg';

const Testimonial = ({name, rating, photo, message}) => {
    
    const renderStars = (name, rating) => {
        let stars = [];
        for(var i = 1; i <= Number(rating); i++ ) {
            stars.push(<Star key={name} />)
        }
        return stars;
    }

    return (
        <li className={styles.Item}>
            <div className={styles.Rating}>
                {renderStars(rating)}
            </div>
            <figure>
                <img src={photo} alt="Customer photo" className={styles.Image}/>
            </figure>
            <h3 className={styles.Name}>{name}</h3>
            <p className={styles.Message}>{message}</p>
        </li>
    );
}

export default Testimonial;