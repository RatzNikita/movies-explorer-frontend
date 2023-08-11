import './Input.css'
import React from 'react'

export const Input = ({name, onChange, ...props}) => {

    const [isValid, setIsValid] = React.useState(true)

    const handleChange = (e) => {
        setIsValid(e.target.validity.valid)
        onChange(e)
    }
    return (
        <>
            <label className='auth-form__input-name'>{name}</label>
            <input className={`auth-form__input ${!isValid && 'auth-form__input_color_red'}`} onChange={handleChange} {...props}></input>
        </>
    )
}
