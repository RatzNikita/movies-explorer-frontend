import './Movies.css'
import withLayout from "../../hoc/withLayout/withLayout";
import {SearchForm} from "./SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import {Preloader} from "./Preloader/Preloader";
import React from "react";
import {moviesApi} from "../../api/MoviesApi";
import {getSavedFilms, search, searchByName, shorts, showCards, stateFilms} from "../../utils/helpFunctions";
import withProtect from "../../hoc/withProtect/withProtect";
import {SHORTS_DURATION} from "../../utils/constants";

const Movies = () => {

    const [searchQuery, setSearchQuery] = React.useState(search() ? search() : '')
    const [onlyShorts, setOnlyShorts] = React.useState(shorts() ? shorts() : false)
    const [filmsOnPage, setFilmsOnPage] = React.useState(showCards())
    const [initialMovies, setInitialMovies] = React.useState([])
    const [unfilteredFilms, setUnfilteredFilms] = React.useState(stateFilms() ? stateFilms() : [])
    const [filteredFilms, setFilteredFilms] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        if (searchQuery && initialMovies.length < 1) {
            getMovies()
        }
    }, [searchQuery])

    React.useEffect(() => {
        if (unfilteredFilms) {
            if (onlyShorts) {
                setFilteredFilms(unfilteredFilms.filter(film => film.duration <= SHORTS_DURATION).slice(0, filmsOnPage))
            } else {
                setFilteredFilms(unfilteredFilms.slice(0, filmsOnPage))
            }
        }
    }, [unfilteredFilms, filmsOnPage, onlyShorts])

    const onMoviesSearch = async ({search}) => {
        setError(false)
        setUnfilteredFilms([])
        setIsLoading(true)
        setFilmsOnPage(showCards())
        setSearchQuery(search)
        if (initialMovies?.length > 0) {
            const movies = initialMovies.filter(movie => searchByName(movie, search))
            localStorage.setItem('search', JSON.stringify(search))
            localStorage.setItem('films', JSON.stringify(movies))
            setUnfilteredFilms(movies)
        }
        setIsLoading(false)
    }

    const getMovies = async () => {
        setIsLoading(true)
        const movies = await moviesApi
            .getMovies()
            .catch(() => setError(true))
        await getSavedFilms(movies)
            .then(filteredFilms => {
                setInitialMovies(filteredFilms)
                const searchedMovies = filteredFilms.filter(movie => searchByName(movie, searchQuery))
                localStorage.setItem('search', JSON.stringify(searchQuery))
                localStorage.setItem('films', JSON.stringify(searchedMovies))
                setUnfilteredFilms(searchedMovies)
            })
        setIsLoading(false)
    }

    return (
        <main className='movies'>
            <SearchForm isLoading={isLoading} onMoviesSearch={onMoviesSearch} setOnlyShorts={setOnlyShorts}
                        onlyShorts={onlyShorts} key={1}/>
            <MoviesCardList movies={filteredFilms} error={error} setMovies={setUnfilteredFilms}/>
            <Preloader queryIsEmpty={!searchQuery} onlyShorts={onlyShorts} setCounterFilms={setFilmsOnPage}
                       showedFilms={filteredFilms} searchQuery={searchQuery}
                       isLoading={isLoading} counterFilms={filmsOnPage} films={unfilteredFilms}/>
        </main>
    )
}

export default withProtect(withLayout(Movies))
