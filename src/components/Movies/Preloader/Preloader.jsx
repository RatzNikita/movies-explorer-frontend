import './Preloader.css'
import React from 'react'
import {addCardsToShow} from "../../../utils/helpFunctions";


export const Preloader = ({
                              queryIsEmpty,
                              setCounterFilms,
                              films,
                              onlyShorts,
                              showedFilms,
                              counterFilms,
                              searchQuery,
                              isLoading
                          }) => {

    const [showMore, setShowMore] = React.useState(false)
    const [message, setMessage] = React.useState('Введите название фильма')

    React.useEffect(() => {
        if (searchQuery) {
            if (films && showedFilms?.length > 0) {
                setShowMore(true)
            } else {
                setShowMore(false)
                setMessage('Ничего не найдено')
            }
        }
    }, [searchQuery, films, showedFilms])

    const uploadFilms = () => {
        if (!queryIsEmpty) {
            setCounterFilms(prev => prev + addCardsToShow())
        }
    }

    const appearMoreButton = () => {
        if (!onlyShorts && (films?.length > counterFilms || films?.filter(f => f.duration < 40).length > counterFilms)) {
            return (
                <button className='preloader__button'
                        onClick={uploadFilms}>{'Ещё'}</button>
            )
        }
    }

    return (
        <div className='preloader'>
            {isLoading
                ? <button className='preloader__button'>
                    <div className='preloader__load'/>
                </button>
                : showMore
                    ? appearMoreButton()
                    : <button className='preloader__button'>{message}</button>
            }
        </div>
    )
}
