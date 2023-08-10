import './MoviesCard.css'
import {convertSecondsToHHMM} from "../../utils/convertTime";

export const MoviesCard = ({card}) => {

    return (
        <li className='movie-card'>
            <img  src={card.image} alt={`${card.name} poster`} className='movie-card__img'/>
            <h4 className='movie-card__title'>{card.name}</h4>
            <p className='movie-card__caption'>{convertSecondsToHHMM(card.duration)}</p>
        </li>
    )
}
