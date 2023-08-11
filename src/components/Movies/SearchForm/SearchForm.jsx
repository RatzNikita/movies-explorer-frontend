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
                <div className='search-form__search-icon'/>
                <input className='search-form__input' placeholder='Фильм'></input>
                <button className='search-form__button'>Найти</button>
                <div className='search-form__switch-container search-form__switch-container_inline'>
                    <button className={`search-form__switch ${!showShorts && 'search-form__switch_off'}`}
                            onClick={onSwitch}/>
                    <p className='search-form__switch-caption'>Короткометражки</p>
                </div>
            </div>
            <div className='search-form__switch-container'>
                <button className={`search-form__switch ${!showShorts && 'search-form__switch_off'}`}
                        onClick={onSwitch}/>
                <p className='search-form__switch-caption'>Короткометражки</p>
            </div>
            <div className='divider divider_color_grey search-form__divider'/>
        </section>
    )
}
