import { IPost } from "../../../types";
import LikeIcon from "../../Icons/LikeIcon";
import DislikeIcon from "../../Icons/DislikeIcon";
import BookmarkIcon from "../../Icons/BookmarkIcon";
import MoreIcon from "../../Icons/MoreIcon";
import "./Post.css";
import { POST_VIEWS } from "../../../constants/posts-constants";
import { ThemeContext } from "../../../contexts/themeContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const dateFormat = (date: string): string => {
	const dateArr = date.split("-");
	let res = "";
	switch (dateArr[1]) {
		case "01":
			res += "January";
			break;
		case "02":
			res += "February";
			break;
		case "03":
			res += "March";
			break;
		case "04":
			res += "April";
			break;
		case "05":
			res += "May";
			break;
		case "06":
			res += "June";
			break;
		case "07":
			res += "July";
			break;
		case "08":
			res += "August";
			break;
		case "09":
			res += "September";
			break;
		case "10":
			res += "October";
			break;
		case "11":
			res += "November";
			break;
		case "12":
			res += "December";
	}

	res += ` ${dateArr[2]}, `;
	res += dateArr[0];
	return res;
};

const Post = ({ postObj, postView }: IPost) => {
	const { theme } = useContext (ThemeContext)
	const date = <p className="post__date">{dateFormat(postObj.date)}</p>;

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
