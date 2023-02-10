import styles from './ImageCard.module.scss';

const ImageCard = ({children, position}) => {
    return (
        <div className={styles.Box}>
            {children}
        </div>
    )
}

export default ImageCard;