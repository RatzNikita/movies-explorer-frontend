import './Preloader.css'
import React from 'react'

const addFilms = () => {
    const width = window.innerWidth
    if (width >= 1280) {
        return 3;
    } else {
        return 2;
    }
}

export const Preloader = ({
                              queryIsEmpty, setCounterFilms,
                              films,
                              onlyShorts,
                              showedFilms,
                              counterFilms,
                              searchQuery,
                              isLoading
                          }) => {

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
    }, [searchQuery, films, showedFilms])

    const uploadFilms = () => {
        if (!queryIsEmpty) {
            setCounterFilms(prev => prev + addFilms())
        }
    }

    const checkCount = () => {
        if (!onlyShorts) {
            if (films?.length > counterFilms) {
                return (
                    <button className='preloader__button'
                            onClick={uploadFilms}>{'Ещё'}</button>
                )
            }
        } else {
            if (films?.filter(f => f.duration < 40).length > counterFilms) {
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
