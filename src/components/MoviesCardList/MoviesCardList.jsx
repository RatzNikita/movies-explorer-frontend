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

    const onMovieUnlike = async (movie) => {
        await api.removeMovie(movie._id).then(() => {
            setMovies(prev => prev.map((film) => {
                if(film._id === movie._id) {
                    delete film.saved;
                    delete film._id;
                }
                return film;
            }))
            unsetLikeFromStore(movie.id)
        })
            .catch(error => console.log(error))
    }

    const onMovieSave = async (movie) => {
        await api.saveMovie(movie)
            .then((movie) => {
                setMovies(prev => prev.map((film) => {
                    if (film.id === movie.movieId) {
                        film.saved = true;
                        film._id = movie._id
                    }
                    return film;
                }))
                setLikeToStore(movie.movieId, movie._id)
            })
            .catch(error => console.log(error))
    }

    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {movies?.map(movie => {
                    return (
                        <MoviesCard key={window.location.pathname === '/movies' ? movie.id : movie.movieId} movie={movie} onMovieRemove={onMovieRemove} onMovieUnlike={onMovieUnlike}
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
