import {api} from "../api/MainApi";
import {
    MAX_CARDS_MEDIUM_SCREEN,
    MAX_CARDS_SMALL_SCREEN,
    MAX_CARDS_WIDE_SCREEN,
    MEDIUM_SCREEN,
    MORE_CARDS_SMALL_SCREEN,
    MORE_CARDS_WIDE_SCREEN,
    WIDE_SCREEN
} from "./constants";

export const getSavedFilms = async (films) => {
    const savedMovies = await api.getSavedMovies()
    if (savedMovies.length > 0) {
        return films.map((film) => {
            const currenFilm = savedMovies.find(movie => movie.movieId === film.id)
            if (currenFilm) {
                film.saved = true;
                film._id = currenFilm._id
            }
            return film;
        })
    }
    return films;
}

export const searchByName = (film, query) => {
    return film.nameRU.toLowerCase().includes(query.toLowerCase())
        || film.nameEN.toLowerCase().includes(query.toLowerCase())
}

export const addCardsToShow = () => {
    const width = window.innerWidth
    if (width >= 1280) {
        return MORE_CARDS_WIDE_SCREEN;
    } else {
        return MORE_CARDS_SMALL_SCREEN;
    }
}


export const showCards = () => {
    const width = window.innerWidth
    if (width >= WIDE_SCREEN) {
        return MAX_CARDS_WIDE_SCREEN;
    } else if (width >= MEDIUM_SCREEN) {
        return MAX_CARDS_MEDIUM_SCREEN;
    } else {
        return MAX_CARDS_SMALL_SCREEN;
    }
}

export const prepareMovieToSave = (movie,user) => {
    const url = 'https://api.nomoreparties.co'
    const preparedMovie =  {...movie,image: url + movie.image.url, owner: user._id, thumbnail: url + movie.image.formats.thumbnail.url, movieId: movie.id}
    delete preparedMovie.id
    delete preparedMovie.created_at
    delete preparedMovie.updated_at
    return preparedMovie;
}

export function convertMinutesToHHMM(minutes) {
    const seconds = minutes * 60
    const date = new Date(seconds * 1000).toISOString().slice(11, 16).split(':').map(number => {
        if (number.slice(0, 1) === '0') {
            return number.slice(1)
        }
        return number
    })
    if(date[0] === '0') {
        return `${date[1]}м`
    } else {
        return ` ${date[0]}ч ${date[1]}м`
    }
}

export function unsetLikeFromStore(id) {
    const prevMovies = JSON.parse(localStorage.getItem('films'))
    const newMovies = prevMovies.map(film => {
        if(film.id === id) {
            delete film.saved
            delete film._id
        }
        return film;
    })
    localStorage.setItem('films',JSON.stringify(newMovies))
}

export function setLikeToStore(movieId,newId) {
    const prevMovies = JSON.parse(localStorage.getItem('films'))
    const newMovies = prevMovies.map(film => {
        if(film.id === movieId) {
            film.saved = true;
            film._id = newId
        }
        return film;
    })
    localStorage.setItem('films',JSON.stringify(newMovies))
}

export const search = () => JSON.parse(localStorage.getItem('search'))
export const shorts = () => JSON.parse(localStorage.getItem('shorts'))
export const stateFilms = () => JSON.parse(localStorage.getItem('films'))