import FullScreenSection from "./FullScreenSection";
import Profile1JPG from '../img/profile-1.jpg';
import Profile2JPG from '../img/profile-2.jpg';
import Profile3JPG from '../img/profile-3.jpg';
import Profile4JPG from '../img/profile-4.jpg';


import CardList from "./CardList";
import Testimonial from "./Testimonial";

const testimonialsData = [
    {
        name: 'Wonmi Kwon',
        photo: Profile1JPG,
        rating: '4',
        message: 'Ordered some chicken wings which was not to my liking because it smelled like chicken however it tasted good. It is a nice place to grab a quick meal.'
    },
    {
        name: 'Josh Thompson',
        photo: Profile2JPG,
        rating: '5',
        message: 'This was the first restaurant I went to during a work trip to Montgomery. Everything was delicious from the coffee, baklava, salad and chicken gyro.'
    },
    {
        name: 'Loy Khan',
        photo: Profile3JPG,
        rating: '5',
        message: 'The food was GREAT!! If you need a quick bite for good prices, come here. You will leave happy and full. There seems to be limited seating tho so be wary of that.'
    },
    {
        name: 'Haru Sean',
        photo: Profile4JPG,
        rating: '5',
        message: 'Very accommodating of large groups. The gyro and shawarma were excellent. Prices are very reasonable given the quantity of food.'
    }
]

const renderCards = () => {
    return testimonialsData.map((el) => {
        return (
            <Testimonial 
                key={el.name}
                name={el.name}
                rating={el.rating}
                photo={el.photo}
                message={el.message}
            />
        )
    })
}

const Testimonials = () => {
    return (
        <FullScreenSection
            bgColor='#ededed' 
            fontColor='#333' 
            bgImage='none'
        >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '2rem'}}>
                <h2 style={{fontSize: '3rem'}}>Testimonials</h2>
            </div>
            <CardList colNum='4'>
                {renderCards()}
            </CardList>
        </FullScreenSection>
    );
}

export default Testimonials;