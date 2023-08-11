
import {Input} from "../Input/Input";
import React from 'react'
import {AuthForm} from "../AuthForm/AuthForm";


export const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onFormSubmit = (e) => {
        console.log(e.target.elements)
    }


    return (
        <section className='signin'>
            <AuthForm type='signin' onSubmit={onFormSubmit} noValidate>
                <Input type='email' name='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input minLength={2} maxLength={30} type='password' name='Пароль' value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </AuthForm>
        </section>
    )
}
