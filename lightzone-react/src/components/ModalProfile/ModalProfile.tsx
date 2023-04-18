import {IStoreState } from "../../types";
import "../ModalPost/Modal.css";
import "./ProfileModal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { setProfileModalVisibleStatus } from "../../redux/action-creators";

const ModalProfile = () => {
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    const userName = useSelector((state: IStoreState) => state.user.authorizedUserName);
	const dispatch = useDispatch();

	const handleHideModal = (e: any) => {
		if (e.target.className === 'modal' || e.target.className ==='modal__button' || e.target.className ==='ok-button') 
		dispatch(setProfileModalVisibleStatus(false));
	};

    return (
        <div className="modal" onClick={handleHideModal}>
            <div className="modal__container">
                <div className="profile">
                    <p className="profile__title">Your profile</p>
                    <p className="profile__name">
                        Name:
                        <span>{`${userName.split('_').join(' ')}`}</span>
                    </p>
                    <p className="profile__email">
                        Email:
                        <span>{`${userName}`}</span>
                    </p>
                </div>
                <div className="ok-button" onClick={handleHideModal}>OK</div>
                <div className="modal__button" onClick={handleHideModal}/>
			</div>
		</div>
    )
}
export default ModalProfile