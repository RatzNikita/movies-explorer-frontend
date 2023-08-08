import logo from '../../images/logo.svg'
import './Header.css'


export const Header = () => {

    return (
        <header className='header'>
            <img src={logo} alt='App logo' className='header__logo'/>
            <div className='header__auth-bar'>
                <button type='button' className='header__button header__button_type_signup'>Регистрация</button>
                <button type='button' className='header__button header__button_type_signin'>Войти</button>
            </div>
        </header>
    )
}
