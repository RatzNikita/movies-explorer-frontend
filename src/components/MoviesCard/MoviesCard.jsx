import './MoviesCard.css'
import {useContext} from "react";
import {CurrentUserContext} from "../context/CurrentUserContext";
import {convertMinutesToHHMM, prepareMovieToSave} from "../../utils/helpFunctions";

export const MoviesCard = ({movie, onMovieRemove, onMovieSave}) => {

    const {currentUser} = useContext(CurrentUserContext)

    const handleRemoveMovie = () => {
        onMovieRemove(movie._id)
    }

    const handleMovieSave = () => {
        const preparedMovie = prepareMovieToSave(movie, currentUser)
        onMovieSave(preparedMovie)
    }

    const handleShowTrailer = () => {
        if (movie.trailerLink) {
            window.open(movie.trailerLink, '_blank');
        }
    }

    return (
        <li className='movie-card'>
            <div className='movie-card__img-container'>
                <img src={window.location.pathname === '/movies' ? 'https://api.nomoreparties.co'+ movie.image.url : movie.image} alt={`${movie.nameRU} poster`}
                     className='movie-card__img' onClick={handleShowTrailer}/>
                {window.location.pathname === '/saved-movies'
                    ? <button className='movie-card__btn movie-card__btn_style_remove' onClick={handleRemoveMovie}/>
                    : movie.saved
                        ? <span className='movie-card__btn movie-card__btn_style_saved'/>
                        : <button className='movie-card__btn movie-card__btn_style_save'
                                  onClick={handleMovieSave}>Сохранить</button>
                }
            </div>
            <h4 className='movie-card__title'>{movie.nameRU}</h4>
            <p className='movie-card__caption'>{convertMinutesToHHMM(movie.duration)}</p>
        </li>
    )
}
