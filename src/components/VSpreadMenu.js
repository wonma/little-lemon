import styles from './VSpreadMenu.module.scss';

const VSpreadMenu = ({columnMenuData}) => {
    return (
        <nav aria-label={columnMenuData.heading} className={styles.Box}>
            <ul>
                <h3>{columnMenuData.heading}</h3> 
                {
                    columnMenuData.links.map((link) => {
                        return (
                            <li><a href={link.url}>{link.label}</a></li>
                        )
                    })
                }

            </ul>
        </nav>
    );
}

export default VSpreadMenu;