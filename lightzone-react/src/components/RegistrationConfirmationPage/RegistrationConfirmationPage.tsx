import InfoForm from '../InfoForm/InfoForm';
import { IMessage, IStoreState } from '../../types';
import { useSelector } from 'react-redux';


const RegistrationPage = () => {
	const theme = useSelector((state: IStoreState) => state.ui.theme);
    
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