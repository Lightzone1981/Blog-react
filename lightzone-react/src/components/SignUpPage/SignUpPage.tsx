import SignUpForm from './SignUpForm';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const SignUpPage = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Sign Up</h1>
                </div>
                <SignUpForm/>
            </main>
        </div>
    )
}
export default SignUpPage