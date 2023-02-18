import styles from './VSpreadMenu.module.scss';

const VSpreadMenu = ({columnMenuData}) => {
    return (
        <nav aria-label={columnMenuData.heading} className={styles.Box}>
            <h3>{columnMenuData.heading}</h3> 
            <ul>
                {
                    columnMenuData.links.map((link) => {
                        return (
                            <li key={link.label}><a href={link.url}>{link.label}</a></li>
                        )
                    })
                }

            </ul>
        </nav>
    );
}

export default VSpreadMenu;