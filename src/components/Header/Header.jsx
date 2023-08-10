import logo from '../../images/logo.svg'
import './Header.css'
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext";
import React from 'react'


export const Header = () => {

    const {setNavIsVisible} = React.useContext(AppContext)

    const navigate = useNavigate();

    const toRegister = () => {
        navigate('/signup', {replace: true})
    }

    const toLogin = () => {
        navigate('/signin', {replace: true})
    }



    return (
        <header className={`header ${window.location.pathname === '/' && 'header_color_pink'}`}>
            <img src={logo} alt='App logo' className='header__logo'/>
            {window.location.pathname === '/'
                ? <div className='header__auth-bar'>
                    <button type='button' className='header__button header__button_type_signup'
                            onClick={toRegister}>Регистрация
                    </button>
                    <button type='button' className='header__button header__button_type_signin'
                            onClick={toLogin}>Войти
                    </button>
                </div>
                : <button className='header__menu-btn' onClick={() => setNavIsVisible(true)}/>
            }
        </header>
    )
}
