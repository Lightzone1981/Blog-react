import InfoForm from '../InfoForm/InfoForm';
import { IMessage } from '../../types';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const RegistrationPage = ({ message }:IMessage) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Registration Confirmation</h1>
                </div>
                <InfoForm message={message} />
            </main>
        </div>
    )
}
export default RegistrationPage