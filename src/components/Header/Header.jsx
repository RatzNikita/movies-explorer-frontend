import logo from '../../images/logo.svg'
import './Header.css'
import {useNavigate} from "react-router-dom";


export const Header = () => {

    const navigate = useNavigate();

    const toRegister = () => {
        navigate('/signup', {replace: true})
    }

    return (
        <header className='header'>
            <img src={logo} alt='App logo' className='header__logo'/>
            <div className='header__auth-bar'>
                <button type='button' className='header__button header__button_type_signup'
                        onClick={toRegister}>Регистрация
                </button>
                <button type='button' className='header__button header__button_type_signin'>Войти</button>
            </div>
        </header>
    )
}
