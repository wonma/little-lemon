const FullScreenSection = ({children, minHeight, bgColor, fontColor, bgImage, title}) => {
    const bgDetails = `linear-gradient(75deg, #000 20%, transparent 100%), url(${bgImage})`;

    const sectionStyles = {
        backgroundColor: bgColor,
        color: fontColor,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: bgImage !== 'none' ? bgDetails : 'none'    
    }
    
    const innerContainer = {
        padding: '4rem 1.6rem',
        maxWidth: '96rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: minHeight
      }
        
    return (
        <section style={sectionStyles} aria-label={title}>
            <div style={innerContainer}>
                {children}
            </div>
        </section>
    );
}

export default FullScreenSection;