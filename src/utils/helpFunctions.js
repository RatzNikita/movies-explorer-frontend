import {api} from "../api/MainApi";

export const getSavedFilms = async (films) => {
    const savedMovies = await api.getSavedMovies()
    if (savedMovies.length > 0) {
        return films.map((film) => {
            if (savedMovies.find(movie => movie._id === film._id)) {
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

export const search = () => JSON.parse(localStorage.getItem('search'))
export const shorts = () => JSON.parse(localStorage.getItem('shorts'))
export const stateFilms = () => JSON.parse(localStorage.getItem('films'))