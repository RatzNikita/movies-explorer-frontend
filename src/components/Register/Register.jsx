import {Input} from "../Input/Input";
import React from 'react'
import {AuthForm} from "../AuthForm/AuthForm";
import {api} from "../../api/MainApi";
import {useNavigate} from "react-router-dom";
import {nameRegex} from "../../utils/helpFunctions";


export const Register = () => {

    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = React.useState(null)
    const navigate = useNavigate();

    const onFormSubmit = async () => {
        await api.signUp(formValue)
            .then(res => {
                navigate('/signin',{replace: true})
            }).catch(error => {
                console.log(error)
                if (error === 409) {
                    setError('Пользователь с таким email уже существует')
                    return;
                }
                setError('При регистрации пользователя произошла ошибка')
            })
    }

    const setValue = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }


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
}
