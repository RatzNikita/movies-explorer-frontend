import {Input} from "../Input/Input";
import React, {useContext} from 'react'
import {AuthForm} from "../AuthForm/AuthForm";
import {api} from "../../api/MainApi";
import {Navigate, useNavigate} from "react-router-dom";
import {USER_EXIST_MESSAGE, USER_REGISTRATION_MESSAGE} from "../../utils/constants";
import {AppContext} from "../context/AppContext";


export const Register = () => {

    const {loggedIn} = useContext(AppContext)

    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = React.useState(null)
    const navigate = useNavigate();

    const onFormSubmit = async () => {
        await api.signUp(formValue)
            .then(() => {
                navigate('/signin',{replace: true})
            }).catch(error => {
                console.log(error)
                if (error === 409) {
                    setError(USER_EXIST_MESSAGE)
                    return;
                }
                setError(USER_REGISTRATION_MESSAGE)
            })
    }

    const setValue = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    if(!loggedIn) {
    return (
        <section>
            <AuthForm error={error} type='signup' onSubmit={onFormSubmit} noValidate>
                <Input pattern='[0-9a-zA-Zа-яА-Я\- ]{2,30}' name='name' minLength={2} maxLength={30} type='text' label='Имя' value={formValue.name} required
                       onChange={setValue}/>
                <Input type='email' name='email' label='E-mail' value={formValue.email} required onChange={setValue}/>
                <Input minLength={2} maxLength={30} name='password' required type='password' label='Пароль'
                       value={formValue.password}
                       onChange={setValue}/>
            </AuthForm>
        </section>
    )
    } else {
        return (
            <Navigate to={'/'} replace/>
        )
    }
}
