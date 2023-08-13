import './Movies.css'
import withLayout from "../../utils/withLayout/withLayout";
import {SearchForm} from "./SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import {Preloader} from "./Preloader/Preloader";
import React from "react";
import {moviesApi} from "../../api/MoviesApi";
import {MoviesContext} from "../context/MoviesContext";

const showCards = () => {
    const width = window.innerWidth
    if (width >= 1280) {
        return 12;
    } else if (width >= 768) {
        return 8;
    } else {
        return 5;
    }
}

export const search = JSON.parse(localStorage.getItem('search'))
export const shorts = JSON.parse(localStorage.getItem('shorts'))
export const stateFilms = JSON.parse(localStorage.getItem('films'))

const Movies = () => {
    const [searchQuery, setSearchQuery] = React.useState(search ? search : '')
    const [onlyShorts, setOnlyShorts] = React.useState(shorts ? shorts : false)
    const [counterFilms, setCounterFilms] = React.useState(showCards())
    const [films, setFilms] = React.useState(stateFilms ? stateFilms : [])
    const [filteredFilms, setFilteredFilms] = React.useState([]);
    const [showedFilms, setShowedFilms] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        if (films) {
            if (onlyShorts) {
                setShowedFilms(films.slice(0, counterFilms))
            } else {
                setFilteredFilms(films.filter(film => film.duration <= 40));
                setShowedFilms(filteredFilms.slice(0, counterFilms))
            }
        }
    }, [films, counterFilms, onlyShorts])


    const onMoviesSearch = async (options) => {
        setIsLoading(true)
        setCounterFilms(showCards())
        setSearchQuery(options.search)
        const initialMovies = await moviesApi.getMovies().catch(error => console.log(error))
        const movies = initialMovies.filter(movie => movie.nameRU.toLowerCase().includes(options.search.toLowerCase())
            || movie.nameEN.toLowerCase().includes(options.search.toLowerCase()))
        localStorage.setItem('films', JSON.stringify(movies))
        setFilms(movies)
        setIsLoading(false)

    }

    const saveState = () => {
        localStorage.setItem('state', JSON.stringify({
            films: films,
            search: searchQuery,
            shorts: onlyShorts,
        }))
    }

    return (
        <main className='movies'>
            <MoviesContext.Provider value={{
                setCounterFilms,
                films,
                onlyShorts,
                filteredFilms,
                showedFilms,
                counterFilms,
                searchQuery,
                isLoading,
                setOnlyShorts
            }}>
                <SearchForm onMoviesSearch={onMoviesSearch}/>
                <MoviesCardList/>
                <Preloader queryIsEmpty={!searchQuery}/>

            </MoviesContext.Provider>
        </main>
    )
}

export default withLayout(Movies)
