import { IPost, IStoreState } from "../../../types";
import LikeIcon from "../../Icons/LikeIcon";
import DislikeIcon from "../../Icons/DislikeIcon";
import BookmarkIcon from "../../Icons/BookmarkIcon";
import MoreIcon from "../../Icons/MoreIcon";
import "./Post.css";
import { POST_VIEWS } from "../../../constants/posts-constants";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFormattingDate } from '../../../utils/getFormattingDate';

const Post = ({ postObj, postView }: IPost) => {
	
	const theme = useSelector((state: IStoreState) => state.ui.theme);

	const date = <p className="post__date">{getFormattingDate(postObj.date)}</p>;

	const footer = (
		<footer className="post-footer" data-theme={`${theme}`}>
			<LikeIcon width='22' height='22' color='#4C4B5E'/>
			<span className="likes-count">20</span>
			<DislikeIcon width='22' height='22' color='#4C4B5E'/>
			<div className="post-footer-divider"></div>
			<BookmarkIcon width='16' height='22' color='#4C4B5E'/>
			<MoreIcon width='20' height='4' color='#4C4B5E'/>
		</footer>
	);

	const view1 = (
		<div key={postObj.id} className="post1" data-theme={`${theme}`}>
			<div className="post1__main" >
				<div className="post1__info-container">
					{date}
					<Link to={`/posts/${postObj.id}`} style={{ textDecoration: 'none', color: '#313037' }}>
						<h2 className="post1__title">{postObj.title}</h2>
					</Link>
					<p className="post1__text">{postObj.text}</p>
				</div>
				<div
					className="post1__image-container"
					style={{ background: `url(${postObj.image}) center/cover` }}>
				</div>
			</div>
			{footer}
		</div>
	);

	const view2 = (
		<div key={postObj.id} className="post2" data-theme={`${theme}`}>
			<div
				className="post2__image-container"
				style={{ background: `url(${postObj.image}) center/cover` }}>
			</div>
			{date}
			<Link to={`/posts/${postObj.id}`} style={{ textDecoration: 'none', color: '#313037' }}>
				<h2 className="post2__title">{postObj.title}</h2>
			</Link>
			{footer}
		</div>
	);

	const view3 = (
		<div key={postObj.id} className="post3" data-theme={`${theme}`}>
			<div className="post3__main">
				<div className="post3__info-container">
					{date}
					<Link to={`/posts/${postObj.id}`} style={{ textDecoration: 'none', color: '#313037' }}>
						<h2 className="post3__title">{postObj.title}</h2>
					</Link>
				</div>
				<div
					className="post3__image-container"
					style={{ background: `url(${postObj.image}) center/cover` }}>
				</div>
			</div>
			{footer}
		</div>
	);

    switch (postView) {
        case POST_VIEWS.VIEW1:
            return view1;
        case POST_VIEWS.VIEW2:
            return view2;
        case POST_VIEWS.VIEW3:
            return view3;
    }
	return <></>;
};

export default Post;
