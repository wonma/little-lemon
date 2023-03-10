import FullScreenSection from "./FullScreenSection";
import RestaurantJPG from '../img/restaurant.jpg';
import styles from './Hero.module.scss';
import Button from "./Button";

const Hero = ({title, leadText, hasButton, button, buttonLink, minHeight}) => {
    return (
        <FullScreenSection 
            bgColor='#495E57' 
            fontColor='#f7f7f7' 
            bgImage={RestaurantJPG}
            minHeight={minHeight}
            title={title}
        >
          <h1 className={styles.Title}>{title}</h1>
          <p className={styles.LeadText}>{leadText}</p>
          { hasButton && <Button buttonLink={buttonLink}>{button}</Button> }
        </FullScreenSection>
    );
}

export default Hero;