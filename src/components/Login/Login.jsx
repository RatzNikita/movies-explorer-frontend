import {Input} from "../Input/Input";
import React from 'react'
import {AuthForm} from "../AuthForm/AuthForm";
import {useNavigate} from "react-router-dom";
import {api} from "../../api/MainApi";


export const Login = ({handleLogin}) => {

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    })
    const [error, setError] = React.useState(null)
    const navigate = useNavigate();

    const onFormSubmit = async () => {
        await api.signIn(formValue)
            .then(data => {
                if (data.token) {
                    handleLogin();
                    setFormValue({email: '', password: ''});
                    navigate('/movies', {replace: true});
                }
            }).catch(error => {
                console.log(error)
                if (error === 409) {
                    setError('Пользователь с таким email уже существует')
                    return;
                }
                setError('3. При авторизации произошла ошибка. Переданный токен некорректен.')
            })
    }

    const setValue = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }


    return (
        <section className='signin'>
            <AuthForm error={error} type='signin' onSubmit={onFormSubmit} noValidate>
                <Input type='email' name='email' label='E-mail' value={formValue.email} onChange={setValue}/>
                <Input minLength={2} maxLength={30} type='password' name='password' label='Пароль'
                       value={formValue.password}
                       onChange={setValue}/>
            </AuthForm>
        </section>
    )
}
