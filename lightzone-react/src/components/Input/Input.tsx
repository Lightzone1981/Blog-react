import { useState } from 'react';
import './Input.css'
import { callbackify } from 'util';

interface IInput{
    type: string,
    name: string,
    value?: string,
    label?: string,
    placeholder?: string,
    isEnable?: boolean,
    isEmpty: boolean,
    isValid:boolean,
    isRequired?: boolean,
    error?: string,
    callback: Function
}

const Input = ({ type, name, label, value, placeholder, isEnable, isEmpty, isValid, isRequired, error, callback }: IInput) => {
    const labelComponent = label? <label className='input__label' htmlFor={name}>{label}</label>:''
    return (
        <>
            <div className="input-container" key={name}>
                {labelComponent}
                <input 
                    className='input'
                    name={name}
                    value ={value}
                    type={type}
                    placeholder={placeholder}
                    data-empty={isEmpty}
                    data-valid={isValid}
                    required={isRequired}
                    disabled={!isEnable}
                    onChange={(e) => { callback(e) }}
                />
                <p className='input__error'>
                    {error}
                </p>
            </div>
        </>
    )
}

export default Input