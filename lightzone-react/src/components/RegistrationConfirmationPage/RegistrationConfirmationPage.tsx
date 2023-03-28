import { MainFooter } from "../MainFooter";
import { MainHeader } from "../MainHeader"
import InfoForm from '../InfoForm/InfoForm';
import { IMessage } from '../../types';

const RegistrationPage = ({ message }:IMessage) => {
    return (
        <>
        <MainHeader />
        <div className="page-container">
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Registration Confirmation</h1>
                </div>
                <InfoForm message={message} />
            </main>
            <MainFooter/>
        </div>
        </>
    )
}
export default RegistrationPage