import { useState } from 'react';
import './Input.css'

interface IInput{
    type: string,
    name?: string,
    label?: string,
    placeholder?: string,
    isEnable?: boolean,
    required?: boolean,
    error?:string,
}

const Input = ({ type, name, label, placeholder, isEnable, required, error }: IInput) => {
    const [text,setText] = useState('')
    return (
        <>
            <label className='input__label' htmlFor={name}>{label}</label>
            <input className='input' name={name} type={type} placeholder={placeholder}
                data-empty={text === '' ? 'true' : 'false'}
                data-valid={required && (type ==='password' && text.length>0 && text.length<8)? 'false' : 'true'}
                required={required} disabled={!isEnable} onChange={(e)=>setText(e.target.value)}/>
            <p className='input__error'>{
                type!=='password'? required && error ? error : '': required && error && text.length<8? error: ''}</p>
        </>
    )
}

export default Input