import React from "react";
import './AuthForm.css'
import logo from "../../images/logo.svg";
import {useNavigate} from "react-router-dom";

export const AuthForm = ({children, onSubmit, type, ...props}) => {
    const [formValid, setFormValid] = React.useState(true)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValid(e.target.checkValidity())
        if (formValid) {
            onSubmit(e)
        }
    }

    const toSignin = () => {
        navigate('/signin', {replace: true})
    }

    const toSignUp = () => {
        navigate('/signup', {replace: true})
    }


    return (
        <>
            <img src={logo} alt='App logo' className='auth-form__logo'/>
            <h2 className='auth-form__heading'>Добро пожаловать!</h2>
            <form onSubmit={handleSubmit} noValidate className='auth-form__form'>
                <div className='auth-form__form-container'>
                    {children}
                    <p className={`auth-form__error ${!formValid && 'auth-form__error_visible'}`}>Что-то пошло не
                        так...</p>

                </div>
                <div className='auth-form__button-container'>
                    <button type='submit'
                            className='auth-form__button' {...props}>{type === 'signup' ? 'Зарегистрироваться' : 'Войти'}</button>
                    <p className='auth-form__button-caption'>{type === 'signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}</p>
                    <button onClick={type === 'signup' ? toSignin : toSignUp}
                            className='auth-form__button-caption auth-form__button-caption_style_link'>{type === 'signup' ? 'Войти' : 'Регистрация'}</button>
                </div>
            </form>
        </>
    )
}
