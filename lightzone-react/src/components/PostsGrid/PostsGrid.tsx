import { useState, useEffect, useMemo, useCallback } from "react";
import PostRow from "./PostRow";
import { PostsGridPagination } from "../PostsGridPagination";
import { Loader } from "../Loader";
import { IPostInfo, IStoreState } from '../../types';
import getRowsArray from '../../utils/getRowsArray';
import getPagesPostsArray from '../../utils/getPagesPostsArray';
import { mockDataPosts, ROW_VIEWS} from "../../constants/posts-constants";
import "./PostGrid.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { setPosts } from "../../redux/action-creators/posts_action_creators";

const PostsGrid = () => {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	const dispatch = useDispatch();

	const [paginationActiveItem, setPaginationActiveItem] = useState(1)
	
	useEffect(() => {
		setTimeout(() => dispatch(setPosts(mockDataPosts)) , 1000)
	}, [])
	
	const allPosts = useSelector((state: IStoreState) => state.posts.posts);
	const postsPagesArray = useMemo(() => getPagesPostsArray(mockDataPosts), [mockDataPosts])
	  

	const handlePaginationClick = (e: any) => {

		if (e.target.id.split('-')[0] === 'item') {
			setPaginationActiveItem(Number(e.target.id.split('-')[1]))
		}

		if (e.currentTarget.id === 'pagination-button-prev') {
			if (paginationActiveItem>1)
			setPaginationActiveItem(paginationActiveItem - 1)
		}
		if (e.currentTarget.id === 'pagination-button-next') {
			if (paginationActiveItem < postsPagesArray.length)
			setPaginationActiveItem(paginationActiveItem + 1)
		}
	}

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

	let posts: Array<IPostInfo[]> = []

	if (windowSize.width > 1024) {
		posts = getRowsArray(postsPagesArray[paginationActiveItem-1], ROW_VIEWS.VIEW1, true)
	}

	if (windowSize.width <= 1024 && windowSize.width >= 768) {
		posts = getRowsArray(postsPagesArray[paginationActiveItem-1], ROW_VIEWS.VIEW2)
	}

	if (windowSize.width < 768) {
		posts = getRowsArray(postsPagesArray[paginationActiveItem-1], ROW_VIEWS.VIEW3)
	}

	if (!allPosts.length) {
		return (
			<Loader/>
		)
	}

	return (
		<>
		<section className="posts-grid">{posts.map((el: IPostInfo[], index: number) => PostRow(el, index, windowSize))}</section>
		<PostsGridPagination activeItem={paginationActiveItem} itemsCount={postsPagesArray.length} callback={(e:any)=>handlePaginationClick(e)} />
		</>
	);
};

export default PostsGrid;
