import {SearchForm} from "../Movies/SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import withLayout from "../../hoc/withLayout/withLayout";
import React from "react";
import {api} from "../../api/MainApi";
import {searchByName} from "../../utils/helpFunctions";
import withProtect from "../../hoc/withProtect/withProtect";
import {SHORTS_DURATION} from "../../utils/constants";

const SavedMovies = () => {

    const [savedFilms, setSavedFilms] = React.useState([]);
    const [showedFilms,setShowedFilms] = React.useState([])
    const [searchQuery,setSearchQuery] = React.useState('')
    const [onlyShorts, setOnlyShorts] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        getSavedFilms()
    }, [])

    React.useEffect(() => {
        if (savedFilms) {
            if (onlyShorts) {
                setShowedFilms(savedFilms.filter(film => searchByName(film,searchQuery)).filter(film => film.duration <= SHORTS_DURATION))
            } else {
                setShowedFilms(savedFilms.filter(film => searchByName(film,searchQuery)))
            }
        }
    }, [onlyShorts,savedFilms,searchQuery])

    const onMovieSearch = ({search}) => {
        setSearchQuery(search)
    }

    const getSavedFilms = async () => {
        setIsLoading(true)
        await api.getSavedMovies().then(movies => {
            setSavedFilms(movies)
        })
            .catch(error => console.log(error))
        setIsLoading(false)
    }

    return (
        <main className='saved-movies'>
            <SearchForm isLoading={isLoading} onlyShorts={onlyShorts} setOnlyShorts={setOnlyShorts} onMoviesSearch={onMovieSearch} key={2}/>
            <MoviesCardList movies={showedFilms} setMovies={setSavedFilms}/>
            <div className='preloader'>
                {isLoading
                    ? <button className='preloader__button'>
                        <div className='preloader__load'/>
                    </button>
                    : !isLoading && savedFilms.length === 0
                        ? <button className='preloader__button'>{'Ничего не найдено'}</button>
                        : null
                }
            </div>
        </main>
    )
}

export default withProtect(withLayout(SavedMovies))
