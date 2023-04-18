import InfoForm from '../InfoForm/InfoForm';
import { IStoreState } from '../../types';
import { useSelector } from 'react-redux';

const SuccessPage = () => {
    
	const theme = useSelector((state: IStoreState) => state.ui.theme);
    
    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Success</h1>
                </div>
                <InfoForm message={'Email confirmed. Your registration is now completed'} />
            </main>
        </div>
    )
}
export default SuccessPage