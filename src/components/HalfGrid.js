const HalfGrid = ({children}) => {
    const styles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        width: '100%'
    }
    return (
        <div style={styles}>
            {children}
        </div>
    );
}

export default HalfGrid;