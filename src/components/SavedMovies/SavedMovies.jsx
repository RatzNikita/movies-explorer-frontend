import {SearchForm} from "../Movies/SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import withLayout from "../../hoc/withLayout/withLayout";
import React from "react";
import {api} from "../../api/MainApi";
import {searchByName} from "../../utils/helpFunctions";
import withProtect from "../../hoc/withProtect/withProtect";


const SavedMovies = () => {

    const [initialFilms, setInitialFilms] = React.useState([])
    const [savedFilms, setSavedFilms] = React.useState([]);
    const [onlyShorts, setOnlyShorts] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true)
        api.getSavedMovies().then(movies => {
            setInitialFilms(movies)
            setSavedFilms(movies)
        })
            .catch(error => console.log(error))
        setIsLoading(false)
    }, [])

    React.useEffect(() => {
        if (savedFilms) {
            if (onlyShorts) {
                setSavedFilms(prev => prev.filter(film => film.duration <= 40))
            } else {
                setSavedFilms(initialFilms)
            }
        }
    }, [onlyShorts])

    const onMovieSearch = ({search}) => {
        setSavedFilms(prev => prev.filter(film => searchByName(film, search)))
    }


    return (
        <main className='saved-movies'>
            <SearchForm isLoading={isLoading} onlyShorts={onlyShorts} setOnlyShorts={setOnlyShorts} onMoviesSearch={onMovieSearch} key={2}/>
            <MoviesCardList movies={savedFilms} setMovies={setSavedFilms}/>
            <div className='preloader'>
                {isLoading
                    ? <button className='preloader__button'>
                        <div className='preloader__load'/>
                    </button>
                    : savedFilms.length === 0
                        ? <button className='preloader__button'>{'Ничего не найдено'}</button>
                        : null
                }
            </div>
        </main>
    )
}

export default withProtect(withLayout(SavedMovies))
