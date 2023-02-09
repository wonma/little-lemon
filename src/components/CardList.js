import styles from './CardList.module.scss';

const CardList = ({children, colNum}) => {
    let columStyle;
    if (colNum === '4') {
        columStyle = styles.col_4
     } else {
        columStyle = styles.col_3

     }
    return (
        <ul className={columStyle}>
            {children}
        </ul>
    );
}

export default CardList;