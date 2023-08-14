import './MoviesCard.css'
import {convertSecondsToHHMM} from "../../utils/convertTime";

export const MoviesCard = ({movie, onMovieRemove, onMovieSave}) => {


    const handleRemoveMovie = () => {
        onMovieRemove(movie._id)
    }

    const handleMovieSave = () => {
        onMovieSave(movie)
    }
    const handleShowTrailer = () => {
        if (movie.trailerLink) {
            window.open(movie.trailerLink, '_blank');
        }
    }

    return (
        <li className='movie-card'>
            <div className='movie-card__img-container'>
                <img src={`https://api.nomoreparties.co${movie.image.url}`} alt={`${movie.nameRU} poster`}
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
            <p className='movie-card__caption'>{convertSecondsToHHMM(movie.duration)}</p>
        </li>
    )
}
