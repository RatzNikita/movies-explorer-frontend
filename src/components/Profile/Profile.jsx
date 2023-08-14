import './Profile.css'
import {Header} from "../Header/Header";
import React from "react";
import {CurrentUserContext} from "../context/CurrentUserContext";
import {api} from "../../api/MainApi";
import withProtect from "../../hoc/withProtect/withProtect";

const Profile = ({onSignOut}) => {

    const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext)
    const [edit, setEdit] = React.useState(false)
    const [formState, setFormState] = React.useState({name: currentUser.name, email: currentUser.email})
    const [message, setMessage] = React.useState(null)

    React.useEffect(() => {
        setFormState({name: currentUser.name, email: currentUser.email})
    },[currentUser])

    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(true)
    }

    const setValue = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (edit) {
            await api.setUserInfo(formState)
                .then((user) => {
                    console.log(user)
                    setEdit(false)
                    setMessage({text: 'Успешно!', type: 'success'})
                    setCurrentUser(user)
                })
                .catch(error => {
                    console.log(error)
                    setFormState({name: currentUser.name, email: currentUser.email})
                    setEdit(false)
                    if (error === 409) {
                        setMessage({text: 'Пользователь с таким email уже существует', type: 'error'})
                        return;
                    }
                    setMessage({text: 'При обновлении пользователя произошла ошибка', type: 'error'})
                })

        }
    }

    const cantBeSubmitted = () => {
        return formState.email === currentUser.email && formState.name === currentUser.name
    }

    const handleSignOut = (e) => {
        e.preventDefault()
        onSignOut()
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
                        <input align='right' name='name' type='text' className='profile__input' onChange={setValue}
                               value={formState.name}></input>
                        : <p className='profile__text'
                             onClick={() => handleEdit()}>{currentUser.name}</p>
                    }
                </div>
                <div className='profile__divider'></div>
                <div className='profile__text-container'>
                    <p className='profile__text'>E-mail</p>
                    {edit
                        ? <input align='right' name='email' type='email' className='profile__input' onChange={setValue}
                                 value={formState.email}></input>
                        : <p className='profile__text'>{currentUser.email}</p>
                    }
                </div>
                <p align='center'
                   className={`profile__message ${message ? 'profile__message_visible' : ''}
                    ${message?.type === 'success' ? 'profile__message_type_success' : ''}`}>{message ? message.text : ''}</p>
                <div className='profile__buttons-container'>
                    {edit
                        ? <button className='profile__button' onClick={handleSubmit}
                                  disabled={cantBeSubmitted()}>Сохранить</button>
                        : <button className='profile__button' onClick={handleEdit}>Редактировать</button>
                    }

                    <button className='profile__button profile__button_color_red' onClick={handleSignOut}>Выйти из
                        аккаунта
                    </button>
                </div>
            </form>
        </>
    )
}

export default withProtect(Profile)


