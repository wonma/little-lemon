import FullScreenSection from "./FullScreenSection";
import HalfGrid from './HalfGrid';
import ImageCard from "./ImageCard";
import SampleImageJPG from '../img/restaurant.jpg'

const AboutBusiness = () => {
    return (
        <FullScreenSection bgImage='none' bgColor='#fff'>
            <HalfGrid>
                <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h2 style={{fontSize: '3rem'}}>About Little Lemon</h2>
                    <p style={{fontSize: '2rem', marginBottom: '2rem'}}>Chicago</p>
                    <p style={{fontSize: '1.8rem', lineHeight: '1.7'}}>We serve delicious, healthy, and affordable meals. Individual customization is core to the Little Lemon experience: yes to choosing from an abundant spread, with unlimited toppings and free side pitas. Basically, it’s all about complete satisfaction here.</p>
                </div>
                <ImageCard>
                    <img src={SampleImageJPG} />
                </ImageCard>
            </HalfGrid>
        </FullScreenSection>
    )
}

export default AboutBusiness;