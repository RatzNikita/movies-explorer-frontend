import {api} from "../api/MainApi";

export const getSavedFilms = async (films) => {
    const savedMovies = await api.getSavedMovies()
    if (savedMovies.length > 0) {
        return films.map((film) => {
            if (savedMovies.find(movie => movie.movieId === film.id)) {
                film.saved = true;
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
        return 3;
    } else {
        return 2;
    }
}


export const showCards = () => {
    const width = window.innerWidth
    if (width >= 1280) {
        return 12;
    } else if (width >= 768) {
        return 8;
    } else {
        return 5;
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
        }
        return film;
    })
    localStorage.setItem('films',JSON.stringify(newMovies))
}

export function setLikeToStore(id) {
    const prevMovies = JSON.parse(localStorage.getItem('films'))
    const newMovies = prevMovies.map(film => {
        if(film.id === id) {
            film.saved = true;
        }
        return film;
    })
    localStorage.setItem('films',JSON.stringify(newMovies))
}

export const search = () => JSON.parse(localStorage.getItem('search'))
export const shorts = () => JSON.parse(localStorage.getItem('shorts'))
export const stateFilms = () => JSON.parse(localStorage.getItem('films'))