import styles from './Card.module.scss';

const Card = ({name, price, description, cardImage}) => {
    console.log('received Image: ', cardImage)
    return (
        <li className={styles.Item}>
            <figure>
                <img src={cardImage} alt="Greek salad" className={styles.Image}/>
            </figure>
            <div className={styles.Details}>
                <div className={styles.TitlePrice}>
                    <h3 className={styles.Title}>{name}</h3>
                    <p className={styles.Price}>{price}</p>
                </div>
                <p className={styles.Description}>{description}</p>
                <a href="#" className={styles.OrderButton}>
                    <span className={styles.ButtonText}>Order a delivery</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
        </li>
    );
}

export default Card;