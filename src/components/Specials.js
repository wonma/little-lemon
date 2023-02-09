import FullScreenSection from "./FullScreenSection";
import Button from './Button';
import GreekSaladJPG from '../img/greek-salad.jpg';
import BruchettaJPG from '../img/bruchetta.jpg';
import LemonDessertJPG from '../img/lemon-dessert.jpg';

import CardList from "./CardList";
import Card from './Card';

const specialsData = [
    {
        name: 'Greek salad',
        image: GreekSaladJPG,
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        name: 'Bruchetta',
        image: BruchettaJPG,
        price: '$5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
    },
    {
        name: 'Lemon Dessert',
        image: LemonDessertJPG,
        price: '$4.99',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]

const renderCards = () => {
    return specialsData.map((dish) => {
        return (
            <Card 
                key={dish.name}
                name={dish.name}
                cardImage={dish.image}
                price={dish.price}
                description={dish.description}
            />
        )
    })
}

const Specials = () => {
    return (
        <FullScreenSection
            bgColor='#fff' 
            fontColor='#333' 
            bgImage='none'
        >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '2rem'}}>
                <h2 style={{fontSize: '3rem'}}>Specials</h2>
                <Button>Online Menu</Button>
            </div>
            <CardList>
                {renderCards()}
            </CardList>
        </FullScreenSection>
    );
}

export default Specials;