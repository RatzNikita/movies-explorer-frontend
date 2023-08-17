import logo from '../../images/logo.svg'
import './Header.css'
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext";
import React from 'react'

export const Header = () => {

    const {setNavIsVisible,loggedIn} = React.useContext(AppContext)
    const navigate = useNavigate();

    const toRoute = (route) => {
        setNavIsVisible(false)
        navigate(route, {replace: true})
    }

    return (
        <header className={`header ${window.location.pathname === '/' && 'header_color_pink'}`}>
            <img src={logo} alt='App logo' className='header__logo' onClick={() => toRoute('/')}/>
            {!loggedIn
                ? <div className='header__auth-bar'>
                    <button type='button' className='header__button header__button_type_signup'
                            onClick={() => toRoute('/signup')}>Регистрация
                    </button>
                    <button type='button' className='header__button header__button_type_signin'
                            onClick={() => toRoute('/signin')}>Войти
                    </button>
                </div>
                : <>
                     <nav className='header__navigation'>
                        <div className='header__navigation-buttons'>
                            <button className={`header__navigation-button ${window.location.pathname === '/movies' ? 'header__navigation-button_underlined' : ''}`} onClick={() => toRoute('/movies')}>Фильмы</button>
                            <button className={`header__navigation-button ${window.location.pathname === '/saved-movies' ? 'header__navigation-button_underlined' : ''}`} onClick={() => toRoute('/saved-movies')}>Сохранённые фильмы</button>
                        </div>
                        <div className='account' onClick={() => toRoute('/profile')}>
                            <p className='account-text'>Аккаунт</p>
                            <div className='btn-account-container'>
                                <button className='btn-account'/>
                            </div>
                        </div>
                    </nav>
                <button className='header__menu-btn' onClick={() => setNavIsVisible(true)}/>
                </>
            }
        </header>
    )
}
