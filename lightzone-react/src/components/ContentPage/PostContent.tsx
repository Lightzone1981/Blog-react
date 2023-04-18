import { IPostInfo, IStoreState } from "../../types";
import LikeIcon from "../Icons/LikeIcon";
import DislikeIcon from "../Icons/DislikeIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import { Link } from "react-router-dom";
import "./PostContent.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setPostModalVisibleStatus, setSelectedPost, } from "../../redux/action-creators/";
import ModalPost from "../ModalPost/ModalPost";

const PostContent = () => {
	const { postId } = useParams();
	const posts = useSelector((state: IStoreState) => state.posts.posts);
	const dispatch = useDispatch();
    const postObj = useSelector((state: IStoreState) => state.posts.selectedPost);
    const postModalVisible = useSelector((state: IStoreState) => state.ui.postModalVisibleStatus);

	useEffect(() => {
		dispatch(
			setSelectedPost(
				posts.find((el) => String(el.id) === postId) || ({} as IPostInfo)
			)
		);
	}, []);

	const handleShowModal = () => {
		dispatch(setPostModalVisibleStatus(true));
	};

	return (
        <>
            {postModalVisible?<ModalPost />:<></>}
			<header className="post__header">
				<Link to={`/posts/`} className="back-home-link">
					Home
				</Link>
				<p className="post__id">{`|  Post ${postObj.id}`}</p>
				<p className="post__modal-button" onClick={handleShowModal}>
					{" "}
					details view
				</p>
			</header>
			<div className="post__container">
				<h2 className="post__title">{`${postObj.title}`}</h2>
				<div
					className="post__image"
					style={{ background: `url(${postObj.image}) center/cover` }}></div>
				<p className="post__text">{`${postObj.text}`}</p>
			</div>
			<footer className="post__footer">
				<button className="post__footer-button">
					<LikeIcon width="22" height="22" color="#4C4B5E" />
				</button>
				<button className="post__footer-button">
					<DislikeIcon width="22" height="22" color="#4C4B5E" />
				</button>
				<button className="post__footer-button">
					<BookmarkIcon width="16" height="22" color="#4C4B5E" />
					<p className="post__button-text">Add to favorites</p>
				</button>
			</footer>
		</>
	);
};
export default PostContent;
