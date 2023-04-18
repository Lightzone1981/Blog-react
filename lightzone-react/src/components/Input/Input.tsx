import './Input.css'
import { useSelector } from "react-redux";
import { IStoreState, IInput } from '../../types';

const Input = ({ type, id, name, label, value, placeholder, isEnable, isEmpty, isValid, isRequired, error, callback }: IInput) => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    
    const labelComponent = label ? <label className='input__label' htmlFor={name}>{label}</label> : ''
    return (
        <>
            <div className="input-container" key={name} data-theme={`${theme}`}>
                {labelComponent}
                <input 
                    className='input'
                    id={id}
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