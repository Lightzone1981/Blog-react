import InfoForm from '../InfoForm/InfoForm';
import { IMessage } from '../../types';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const RegistrationPage = () => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Registration Confirmation</h1>
                </div>
                <InfoForm message={'Please activate your account with the activation link in the email: lightzone@tut.by. Please, check your email'} />
            </main>
        </div>
    )
}
export default RegistrationPage