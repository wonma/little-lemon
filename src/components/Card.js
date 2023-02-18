import styles from './Card.module.scss';

const Card = ({name, price, description, cardImage}) => {
    return (
        <li className={styles.Item}>
            <figure>
                <img src={cardImage} alt={name} className={styles.Image}/>
            </figure>
            <div className={styles.Details}>
                <div className={styles.TitlePrice}>
                    <h3 className={styles.Title}>{name}</h3>
                    <p className={styles.Price}>{price}</p>
                </div>
                <p className={styles.Description}>{description}</p>
                <a href="#" className={styles.OrderButton}>
                    <span className={styles.ButtonText}>Order a delivery</span>
                    <svg viewBox="0 0 24 24" stroke="#495e57" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                     <path d="M17 12L7 12M17 12L13 16M17 12L13 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </li>
    );
}

export default Card;