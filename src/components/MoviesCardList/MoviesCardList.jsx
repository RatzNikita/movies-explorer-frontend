import './MoviesCardList.css'
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";
import {api} from "../../api/MainApi";

export const MoviesCardList = ({movies, setMovies,error}) => {


    const onMovieRemove = async (id) => {
        await api.removeMovie(id).then(() => {
            setMovies(prev => prev.filter(movie => movie._id !== id))
        })
            .catch(error => console.log(error))
    }

    const onMovieSave = async (movie) => {
        await api.saveMovie(movie)
            .then((movie) => {
                setMovies(prev => prev.map((film) => {
                    if (film._id === movie._id) {
                        film.saved = true;
                    }
                    return film;
                }))
            })
            .catch(error => console.log(error))
    }

    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {movies?.map(movie => {
                    return (
                        <MoviesCard key={movie.id} movie={movie} onMovieRemove={onMovieRemove}
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
