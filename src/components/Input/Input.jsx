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
            <label className='input__name'>{name}</label>
            <input  className={`input__text ${!isValid && 'input__text_color_red'}`} onChange={handleChange} {...props}></input>
        </>
    )
}
