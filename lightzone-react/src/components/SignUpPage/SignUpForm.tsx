import Button from "../Buttons/Button"
import { Input } from "../Input"
import { useState, useEffect } from 'react';
import './SignUpForm.css'

    
const SignUpForm = () => {
const [nameText, setNameText] = useState('')
const [emailText, setEmailText] = useState('')
const [passwordText, setPasswordText] = useState('')
const [passwordConfirmText, setPasswordConfirmText] = useState('')
    // useEffect(() => {
    //     const isPasswordConfirm:boolean = passwordText === passwordConfirmText? true:false
    // }, [passwordText, passwordConfirmText])
    
    return (
        <form className="sign-up-form">
        <Input
            type='text'
            name='input-1'
            label='Name'
            value=''
            placeholder='Your name'
            isRequired={true}
            error='Enter your name'
            isEnable={true}
            isEmpty={nameText === '' ? true : false}
            isValid={true}
            callback={(e: any) => setNameText(e.target.value)}
        />
        
        <Input
            type='email'
            name='input-2'
            label='Email'
            value=''
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
            value=''
            placeholder='Your password'
            isRequired={true}
            error='Password must contain at least 8 characters'
            isEnable={true}
            isEmpty={passwordText === '' ? true : false}
            isValid={passwordText.length < 8 && passwordText !== ''? false : true}
            callback={(e: any) => setPasswordText(e.target.value)}
        />
        
        <Input
            type='password'
            name='input-3'
            label='Confirm Password'
            value=''
            placeholder='Confirm password'
            error='Confirmation not valid'
            isRequired={true}
            isEnable={true}
            isEmpty={passwordConfirmText === '' ? true : false}
            isValid={(passwordText === passwordConfirmText && passwordConfirmText !== '') || (passwordConfirmText === '')? true : false}
            callback={(e: any) => setPasswordConfirmText(e.target.value)}
        />
        
        <Button
            className='button button-submit'
            content='Sign Up'
            isActive={true}
            callback={(e: any) => { e.preventDefault() }}
        />
            <p className="sign-up-form-text">Already have an account?
                <a className="form-text-link" href='#'>
                    Sign In
                </a>
            </p>
            
        </form>
        
    )

}

export default SignUpForm