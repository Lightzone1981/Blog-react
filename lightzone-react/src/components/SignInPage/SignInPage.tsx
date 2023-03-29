import SignInForm from './SignInForm';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const SignInPage = () => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Sign In</h1>
                </div>
                <SignInForm/>
            </main>
        </div>
    )
}
export default SignInPage