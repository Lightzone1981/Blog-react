import Button from "../Buttons/Button"
import { Input } from "../Input"
import { useState, useEffect } from 'react';
import './SignInForm.css'

    
const SignInForm = () => {
const [nameText, setNameText] = useState('')
const [emailText, setEmailText] = useState('')
const [passwordText, setPasswordText] = useState('')
const [passwordConfirmText, setPasswordConfirmText] = useState('')
    
    return (
        <form className="sign-in-form">
        
        <Input
            type='email'
            name='input-2'
            label='Email'
            placeholder='Your email'
            isRequired={true}
            error='Email is not valid'
            isEnable={true}
            isEmpty={emailText === '' ? true : false}
            isValid={true}
            callback={(e: any) => setEmailText(e.target.value)}
        />

        <Input
            type='password'
            name='input-3'
            label='Password'
            placeholder='Your password'
            isRequired={true}
            error='Password must contain at least 8 characters'
            isEnable={true}
            isEmpty={passwordText === '' ? true : false}
            isValid={passwordText.length < 8 && passwordText !== ''? false : true}
            callback={(e: any) => setPasswordText(e.target.value)}
        />
            <a className="form-text-link form-text-link--black" href='#'>
                Forgot password?
            </a>
        <Button
            className='button button-submit'
            content='Sign In'
            isActive={true}
            callback={(e: any) => { e.preventDefault() }}
        />
            <p className="sign-in-form-text">Don’t have an account? 
                <a className="form-text-link" href='#'>
                    Sign Up
                </a>
            </p>
            
        </form>
        
    )

}

export default SignInForm