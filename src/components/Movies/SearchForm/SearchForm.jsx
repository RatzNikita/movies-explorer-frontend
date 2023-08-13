import './SearchForm.css'
import React from "react";
import {MoviesContext} from "../../context/MoviesContext";


export const SearchForm = ({onMoviesSearch}) => {

    const {setOnlyShorts} = React.useContext(MoviesContext)
    const [formState, setFormState] = React.useState({search: '', shorts: false})

    React.useEffect(() => {
        if (window.location.pathname === '/movies') {
        }
    }, []);

    const onSwitch = (e) => {
        setFormState({...formState, shorts: e.target.checked})
        setOnlyShorts(formState.shorts)
    }

    const onInputChange = (e) => {
        setFormState({...formState, search: e.target.value})
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (formState.search) {
            onMoviesSearch(formState)
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
                    <input type='checkbox' name='shorts' className='search-form__switch' checked={formState.shorts}
                           onChange={onSwitch}/>
                    <p className='search-form__switch-caption'>Короткометражки</p>
                </div>
            </form>
            <div className='search-form__switch-container'>
                <input type='checkbox' name='shorts' className='search-form__switch'
                       checked={formState['shorts']}
                       onChange={onSwitch}/>
                <p className='search-form__switch-caption'>Короткометражки</p>
            </div>
            <div className='divider divider_color_grey search-form__divider'/>
        </section>
    )
}
