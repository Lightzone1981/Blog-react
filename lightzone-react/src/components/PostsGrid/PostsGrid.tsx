import { useState, useEffect, useMemo, useCallback } from "react";
import PostRow from "./PostRow";
import { PaginationBar } from "../PaginationBar";
import { Loader } from "../Loader";
import { IPostInfo } from '../../types';
import getRowsArray from '../../utils/getRowsArray';
import getPagesPostsArray from '../../utils/getPagesPostsArray';
import { mockDataPosts, ROW_VIEWS} from "../../constants/posts-constants";
import "./PostGrid.css";

const PostsGrid = () => {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	
	const [allPosts, setAllPosts] = useState([] as IPostInfo[])
	const [paginationActiveItem, setPaginationActiveItem] = useState(1)

	const postsPagesArray = useMemo(() => getPagesPostsArray(mockDataPosts), [mockDataPosts]) 

	const handlePaginationClick = useCallback((e: any) => {
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
	},[])


	useEffect(() => {
		setTimeout(() => { setAllPosts(postsPagesArray[paginationActiveItem-1]) }, 3000)
	}, [])

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
		<PaginationBar activeItem={paginationActiveItem} itemsCount={postsPagesArray.length} callback={(e:any)=>handlePaginationClick(e)} />
		</>
	);
};

export default PostsGrid;
