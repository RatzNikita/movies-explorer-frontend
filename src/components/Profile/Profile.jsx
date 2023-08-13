import './Profile.css'
import {Header} from "../Header/Header";
import React from "react";
import {CurrentUserContext} from "../context/CurrentUserContext";
import {api} from "../../api/MainApi";
import {useNavigate} from "react-router-dom";

export const Profile = () => {

    const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext)
    const [edit, setEdit] = React.useState(false)
    const [formState, setFormState] = React.useState({name: currentUser.name, email: currentUser.email})
    const [error, setError] = React.useState(null)

    const handleEdit = () => {
        setEdit(true)
    }

    const setValue = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (edit) {
            await api.setUserInfo(formState)
                .then((user) => {
                    console.log(user)
                    setEdit(false)
                    setError(null)
                    setCurrentUser(user)
                })
                .catch(error => {
                    console.log(error)
                    setEdit(false)
                    if (error === 409) {
                        setError('Пользователь с таким email уже существует')
                        return;
                    }
                    setError('При обновлении пользователя произошла ошибка')
                })
            setFormState({name: currentUser.name, email: currentUser.email})
        }
    }

    const handleSignOut = (e) => {
        e.preventDefault()
        localStorage.clear();
        navigate('/',{replace: true})
    }

    return (
        <>
            <Header/>
            <form className='profile'>
                <h2 className='profile__greeting'>{`Привет, ${currentUser.name}!`}</h2>
                <div className='profile__text-container'>
                    <p className='profile__text'>Имя</p>
                    {edit
                        ?
                        <input align='right' name='name' className='profile__input' onChange={setValue}
                               value={formState.name}></input>
                        : <p className='profile__text profile__text_editable'
                             onClick={() => handleEdit()}>{currentUser.name}</p>
                    }
                </div>
                <div className='profile__divider'></div>
                <div className='profile__text-container'>
                    <p className='profile__text'>E-mail</p>
                    {edit
                        ? <input align='right' name='email' className='profile__input' onChange={setValue}
                                 value={formState.email}></input>
                        : <p className='profile__text profile__text_editable'
                             onClick={() => handleEdit()}>{currentUser.email}</p>
                    }
                </div>
                <p align='center'
                   className={`profile__error ${error ? 'profile__error_visible' : ''}`}>{error ? error : ''}</p>
                <div className='profile__buttons-container'>
                    <button className='profile__button' onClick={handleSubmit}>Редактировать</button>
                    <button className='profile__button profile__button_color_red' onClick={handleSignOut}>Выйти из аккаунта</button>
                </div>
            </form>
        </>
    )
}

