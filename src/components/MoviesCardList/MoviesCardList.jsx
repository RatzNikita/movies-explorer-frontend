import './MoviesCardList.css'
import {MoviesCard} from "../MoviesCard/MoviesCard";

const defaultCards = [
    {
        id: 1,
        name: 'От заката до рассвета',
        image: 'https://horrorzone.ru/uploads/previews/ot_zakata.jpg',
        duration: 15000,
    },
    {
        id: 2,
        name: 'Кровавый спорт',
        image: 'https://w.forfun.com/fetch/ad/ad3a08ace43bb0328da5af1d62319c86.jpeg',
        duration: 13450,
    },
    {
        id: 3,
        name: 'Эквилибриум',
        image: 'https://w.forfun.com/fetch/e3/e35107434cfa142b8bd8277235b817ba.jpeg',
        duration: 12300,
    },
]

export const MoviesCardList = ({cards = defaultCards}) => {

    return(
        <section  className='movies-cards'>
            <ul className='movies-cards__list'>
                {cards.map(card => {
                    return (
                        <MoviesCard key={card.id} card={card}/>
                    )
                })}
            </ul>
        </section>
    )
}
