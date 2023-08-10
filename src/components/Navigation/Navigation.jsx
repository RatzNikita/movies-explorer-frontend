import './Navigation.css'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../context/AppContext";

export const Navigation = ({visible = false}) => {

    const {setNavIsVisible} = useContext(AppContext)

    const navigate = useNavigate();

    const onClose = () => {
        setNavIsVisible(false)
    }

    const toRoute = (route) => {
        setNavIsVisible(false)
        navigate(route,{replace: true})
    }

    return (
        <nav className={`navigation ${visible && 'navigation_visible'}`}>
            <button className='navigation__btn-close' onClick={onClose}/>
            <ul className='navigation__links'>
                <li className={`navigation__link ${window.location.pathname === '/' && 'navigation__link_underlined'}`}
                    onClick={() => toRoute('/')}>Главная
                </li>
                <li className={`navigation__link ${window.location.pathname === '/movies' && 'navigation__link_underlined'}`}
                    onClick={() => toRoute('/movies')}>Фильмы</li>
                <li className={`navigation__link ${window.location.pathname === '/saved-movies' && 'navigation__link_underlined'}`}
                    onClick={() => toRoute('/saved-movies')}>Сохранённые
                    фильмы
                </li>
            </ul>
            <div className='navigation__account'>
                <p className='navigation__account-text'>Аккаунт</p>
                <div className='navigation__btn-account-container'>
                    <button className='navigation__btn-account' onClick={() => toRoute('/profile')}/>
                </div>
            </div>
        </nav>
    )
}
