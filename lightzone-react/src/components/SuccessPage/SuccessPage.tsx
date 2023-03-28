import InfoForm from '../InfoForm/InfoForm';
import { IMessage } from '../../types';

const SuccessPage = ({ message }:IMessage) => {
    return (
        <div className="page-container">
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Success</h1>
                </div>
                <InfoForm message={message} />
            </main>
        </div>
    )
}
export default SuccessPage