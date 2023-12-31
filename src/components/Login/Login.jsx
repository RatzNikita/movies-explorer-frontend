import {Input} from "../Input/Input";
import React, {useContext} from 'react'
import {AuthForm} from "../AuthForm/AuthForm";
import {Navigate, useNavigate} from "react-router-dom";
import {api} from "../../api/MainApi";
import {INVALID_TOKEN_MESSAGE, USER_EXIST_MESSAGE} from "../../utils/constants";
import {AppContext} from "../context/AppContext";


export const Login = ({handleLogin}) => {

    const {loggedIn} = useContext(AppContext)
    const [isLoading,setIsLoading] = React.useState(false);

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    })
    const [error, setError] = React.useState(null)
    const navigate = useNavigate();

    const onFormSubmit = async () => {
        setIsLoading(true)
        await api.signIn(formValue)
            .then(({token}) => {
                if (token) {
                    handleLogin();
                    setFormValue({email: '', password: ''});
                    navigate('/movies', {replace: true});
                }
            }).catch(error => {
                if (error === 409) {
                    setError(USER_EXIST_MESSAGE)
                } else {
                    setError(INVALID_TOKEN_MESSAGE)
                }
            })
        setIsLoading(false)
    }

    const setValue = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    if(!loggedIn) {
        return (
            <section className='signin'>
                <AuthForm disabled={isLoading} formValue={formValue} error={error} type='signin' onSubmit={onFormSubmit} noValidate>
                    <Input pattern='^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$'  name='email' label='E-mail' value={formValue.email} onChange={setValue}/>
                    <Input minLength={2} maxLength={30}  required type='password' name='password' label='Пароль'
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
