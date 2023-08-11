
import {Input} from "../Input/Input";
import React from 'react'
import {AuthForm} from "../AuthForm/AuthForm";


export const Register = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onFormSubmit = (e) => {
       console.log(e.target.elements)
    }


    return (
            <section>
                <AuthForm type='signup' onSubmit={onFormSubmit} noValidate>
                    <Input minLength={2} maxLength={30} type='text' name='Имя' value={name} required
                           onChange={(e) => setName(e.target.value)}/>
                    <Input type='email' name='E-mail' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    <Input minLength={2} maxLength={30} required type='password' name='Пароль' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </AuthForm>
            </section>
    )
}
