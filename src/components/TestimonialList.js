import FullScreenSection from "./FullScreenSection";
import GreekSaladJPG from '../img/greek-salad.jpg';
import BruchettaJPG from '../img/bruchetta.jpg';
import LemonDessertJPG from '../img/lemon-dessert.jpg';

import CardList from "./CardList";
import Card from './Card';
import Testimonial from "./Testimonial";

const testimonialsData = [
    {
        name: 'Wonmi Kwon',
        photo: GreekSaladJPG,
        rating: '$12.99',
        message: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        name: 'Wonmi Kwon',
        photo: GreekSaladJPG,
        rating: '$12.99',
        message: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        name: 'Wonmi Kwon',
        photo: GreekSaladJPG,
        rating: '$12.99',
        message: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        name: 'Wonmi Kwon',
        photo: GreekSaladJPG,
        rating: '$12.99',
        message: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    }
]

const renderCards = () => {
    return testimonialsData.map((el) => {
        return (
            <Testimonial 
                key={el.name}
                name={el.name}
                photo={el.photo}
                message={el.message}
            />
        )
    })
}

const TestimonialList = () => {
    return (
        <FullScreenSection
            bgColor='#fff' 
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

export default TestimonialList;