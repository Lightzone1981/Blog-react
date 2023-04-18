import {IStoreState } from "../../types";
import LikeIcon from "../Icons/LikeIcon";
import DislikeIcon from "../Icons/DislikeIcon";
import MoreIcon from "../Icons/MoreIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import "./Modal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { setPostModalVisibleStatus } from "../../redux/action-creators/";
import { getFormattingDate } from "../../utils/getFormattingDate";

const ModalPost = () => {
	const theme = useSelector((state: IStoreState) => state.ui.theme);
	const dispatch = useDispatch();
	const postObj = useSelector((state: IStoreState) => state.posts.selectedPost);

	const handleHideModal = (e: any) => {
		if (e.target.className === 'modal' || e.target.className ==='modal__button') 
		dispatch(setPostModalVisibleStatus(false));
	};

	return (
		<div className="modal" onClick={handleHideModal}>
			<div className="modal__container">
				<div className="post1" data-theme={`${theme}`}>
					<div className="post1__main">
						<div className="post1__info-container">
							<p className="post__date">{getFormattingDate(postObj.date)}</p>
							<h2 className="post1__title">{postObj.title}</h2>
							<p className="post1__text">{postObj.text}</p>
						</div>
						<div
							className="post1__image-container"
							style={{
								background: `url(${postObj.image}) center/cover`,
							}}></div>
					</div>
					<footer className="post-footer" data-theme={`${theme}`}>
						<LikeIcon width="22" height="22" color="#4C4B5E" />
						<span className="likes-count">20</span>
						<DislikeIcon width="22" height="22" color="#4C4B5E" />
						<div className="post-footer-divider"></div>
						<BookmarkIcon width="16" height="22" color="#4C4B5E" />
						<MoreIcon width="20" height="4" color="#4C4B5E" />
					</footer>
				</div>

				<div className="modal__button" onClick={handleHideModal}/>
			</div>
		</div>
	);
};
export default ModalPost;
