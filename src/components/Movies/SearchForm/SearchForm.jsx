import './SearchForm.css'
import React from "react";
import {search} from "../../../utils/helpFunctions";


export const SearchForm = ({onMoviesSearch,setOnlyShorts,onlyShorts}) => {

    const [formState, setFormState] = React.useState({search: ''})
    const [error,setError] = React.useState(false)

    React.useEffect(() => {
        if (window.location.pathname === '/movies') {
            if(search()) {
                setFormState({search: search()})
            }
        }
    }, []);


    const handleSwitch = (e) => {
        setOnlyShorts(e.target.checked)
        localStorage.setItem('shorts',JSON.stringify(e.target.checked))
    }

    const onInputChange = (e) => {
        setError(false)
        setFormState({...formState, search: e.target.value})
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (formState.search) {
            onMoviesSearch(formState)
        } else {
            setError(true)
        }
    }

    return (
        <section className='search-form'>
            <form className='search-form__container'>
                <div className='search-form__search-icon'/>
                <input name='search' className='search-form__input' placeholder='Фильм' value={formState.search}
                       required
                       onChange={onInputChange}></input>
                <button className='search-form__button' onClick={handleSearch}>Найти</button>
                <div className='search-form__switch-container search-form__switch-container_inline'>
                    <input type='checkbox'  className='search-form__switch' checked={onlyShorts}
                           onChange={handleSwitch}/>
                    <p className='search-form__switch-caption'>Короткометражки</p>
                </div>
                {error && <p className='search-form__error'>Нужно ввести ключевое слово</p>}
            </form>
            <div className='search-form__switch-container'>
                <input type='checkbox'  className='search-form__switch'
                       checked={onlyShorts}
                       onChange={handleSwitch}/>
                <p className='search-form__switch-caption'>Короткометражки</p>
            </div>
            <div className='divider divider_color_grey search-form__divider'/>
        </section>
    )
}
