import './MoviesCardList.css'
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";
import {api} from "../../api/MainApi";
import {setLikeToStore, unsetLikeFromStore} from "../../utils/helpFunctions";

export const MoviesCardList = ({movies, setMovies,error}) => {


    const onMovieRemove = async (movie) => {
        await api.removeMovie(movie._id).then(() => {
            setMovies(prev => prev.filter(film => film._id !== movie._id))
            unsetLikeFromStore(movie.movieId)
        })
            .catch(error => console.log(error))
    }

    const onMovieSave = async (movie) => {
        console.log(movie)
        await api.saveMovie(movie)
            .then((movie) => {
                setMovies(prev => prev.map((film) => {
                    if (film.id === movie.movieId) {
                        film.saved = true;
                    }
                    return film;
                }))
                setLikeToStore(movie.movieId)
            })
            .catch(error => console.log(error))
    }

    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {movies?.map(movie => {
                    return (
                        <MoviesCard key={movie.nameEN} movie={movie} onMovieRemove={onMovieRemove}
                                    onMovieSave={onMovieSave}/>
                    )
                })}
            {error && <p className='movies-cards__error'>Во время запроса произошла ошибка.
                Возможно, проблема с соединением или сервер недоступен.
                Подождите немного и попробуйте ещё раз</p>}
            </ul>
        </section>
    )
}
