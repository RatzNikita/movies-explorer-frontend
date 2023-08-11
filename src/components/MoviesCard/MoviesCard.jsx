import './MoviesCard.css'
import {convertSecondsToHHMM} from "../../utils/convertTime";

export const MoviesCard = ({card}) => {

    return (
        <li className='movie-card'>
            <div className='movie-card__img-container'>
                <img src={card.image} alt={`${card.name} poster`} className='movie-card__img'/>
                {window.location.pathname === '/saved-movies'
                    ? <button className='movie-card__btn movie-card__btn_style_remove'/>
                    : card.owner === 'Me'
                        ? <span className='movie-card__btn movie-card__btn_style_saved'/>
                        : <button className='movie-card__btn movie-card__btn_style_save'>Сохранить</button>
                }
            </div>
            <h4 className='movie-card__title'>{card.name}</h4>
            <p className='movie-card__caption'>{convertSecondsToHHMM(card.duration)}</p>
        </li>
    )
}
