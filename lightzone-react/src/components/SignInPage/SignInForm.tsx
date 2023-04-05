import Button from "../Buttons/Button"
import { Input } from "../Input"
import { useState, useContext} from 'react';
import './SignInForm.css'
import { usersDataArray } from "../../constants/users-constants";
import { Link } from "react-router-dom";
import { AuthorizeContext } from "../../contexts/authorizeContext";
import { IUserData } from '../../types';

const SignInForm = () => {
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const { authorize, setAuthorize } = useContext (AuthorizeContext)

    const signIn = (email: string, password: string) => {
        usersDataArray.forEach((user: IUserData) => {
            if (user.email === email && user.password === password) {
                setAuthorize({ status: true, username: `${user.username}` })
            }
        })
    }
    
    
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
        <Link to={authorize.status?'/posts':'#'} style={{textDecoration:'none'}}>
            <Button
                className='button button-submit'
                content='Sign In'
                isActive={true}
                callback={() => {
                    signIn(emailText,passwordText)
                }}
            />
        </Link>

        <p className="sign-in-form-text">Don’t have an account? 
            <Link to={'/sign-up'} style={{textDecoration:'none'}}>
                <span className="form-text-link">Sign Up</span>
            </Link>
        </p>
            
        </form>
        
    )

}

export default SignInForm