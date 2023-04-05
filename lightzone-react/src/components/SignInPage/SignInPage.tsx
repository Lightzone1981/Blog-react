import SignInForm from './SignInForm';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <main className="main">
            <div className="title-wrapper">
            <Link to={'/posts'} style={{textDecoration:'none'}}>
                <a href="#" className="back-home-link">Back to home</a>
            </Link>
                <h1 className="page-title">Sign In</h1>
            </div>
            <SignInForm/>
        </main>
    )
}
export default SignInPage