import { useState, useEffect } from "react";
import PostRow from "./PostRow";
import { mockDataPosts, ROW_VIEWS} from "../../constants/posts-constants";
import "./PostGrid.css";
import { IPostInfo } from '../../types';
import getRowsArray from '../../utils/getRowsArray';

const PostsGrid = () => {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	const [allPosts, setAllPosts] = useState([] as IPostInfo[])

	useEffect(() => {
		setTimeout(() => { setAllPosts(mockDataPosts) }, 3000)
	},[])

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	let posts:Array<IPostInfo[]> = []

	if (windowSize.width > 1024) {
		posts = getRowsArray(mockDataPosts,ROW_VIEWS.VIEW1)
	}

	if (windowSize.width <= 1024 && windowSize.width >= 768) {
		posts = getRowsArray(mockDataPosts,ROW_VIEWS.VIEW2)
	}

	if (windowSize.width < 768) {
		posts = getRowsArray(mockDataPosts,ROW_VIEWS.VIEW3)
	}

	if (!allPosts.length) {
		return (
			<p className="loader" style={{fontSize: '4rem', padding: '2rem'}}>Loading...</p>
		)
	}

	return (
		<section className="posts-grid">{posts.map((el:IPostInfo[], index:number) => PostRow(el, index, windowSize))}</section>
	);
};

export default PostsGrid;
