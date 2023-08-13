import './Preloader.css'
import React from 'react'
import {MoviesContext} from "../../context/MoviesContext";

const addFilms = () => {
    const width = window.innerWidth
    if (width >= 1280) {
        return 3;
    } else {
        return 2;
    }
}

export const Preloader = ({queryIsEmpty}) => {

    const {
        setCounterFilms,
        films,
        onlyShorts,
        filteredFilms,
        showedFilms,
        counterFilms,
        searchQuery,
        isLoading
    } = React.useContext(MoviesContext)
    const [canLoad, setCanLoad] = React.useState(false)
    const [message, setMessage] = React.useState('Ничего не найдено')

    React.useEffect(() => {
        if (searchQuery) {
            if (films) {
                if (showedFilms?.length < 1) {
                    setCanLoad(false)
                    setMessage('Ничего не найдено')
                } else {
                    setCanLoad(true)

                }
            } else {
                setCanLoad(false)
                setMessage('Ничего не найдено')
            }
        } else {
            setCanLoad(false)
            setMessage('Введите название фильма')
        }
    })

    const uploadFilms = () => {
        if (!queryIsEmpty) {
            setCounterFilms(prev => prev + addFilms())
        }
    }


    console.log(canLoad)
    const checkCount = () => {
        console.log('showed films =>', showedFilms)
        console.log('counterFilms =>', counterFilms)
        if (onlyShorts) {
            if (films.length > counterFilms) {
                return (
                    <button className='preloader__button'
                            onClick={uploadFilms}>{'Ещё'}</button>
                )
            }
        } else {
            if (filteredFilms.length > counterFilms) {
                return (
                    <button className='preloader__button'
                            onClick={uploadFilms}>{'Ещё'}</button>
                )
            }
        }
        return null;
    }


    return (
        <div className='preloader'>
            {isLoading
                ? <button className='preloader__button'>
                    <div className='preloader__load'/>
                </button>
                : canLoad
                    ? checkCount()
                    : <button className='preloader__button'>{message}</button>
            }


        </div>
    )
}
