import './SearchForm.css'
import React from "react";


export const SearchForm = () => {

    const [showShorts, setShowShorts] = React.useState(true)

    const onSwitch = () => {
        setShowShorts(!showShorts)
    }

    return (
        <section className='search-form'>
            <div className='search-form__container'>
                <input className='search-form__input' placeholder='Фильм'></input>
                <button className='search-form__button'>Найти</button>
            </div>
            <div className='search-form__switch-container'>
                <button className={`search-form__switch ${!showShorts && 'search-form__switch_off'}`}
                        onClick={onSwitch}/>
                <caption className='search-form__switch-caption'>Короткометражки</caption>
            </div>
            <div className='divider divider_color_grey search-form__divider'/>
        </section>
    )
}
