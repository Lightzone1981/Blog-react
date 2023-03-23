import { useState, useEffect } from "react";
import Post from "./Post/Post";
import { mockDataPosts, POST_VIEWS } from "../../constants/posts-constants";
import "./PostGrid.css";

const PostsGrid = () => {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
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

	const PostRow = (rowArr: number[]) => {
		if (windowSize.width > 1024) {
			if (rowArr.length === 1) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main">
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={rowArr[0] === 0 ? POST_VIEWS.VIEW1 : POST_VIEWS.VIEW2}
							/>
						</div>
					</div>
				);
			}

			if (rowArr.length === 2 && rowArr[0] === 0) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main">
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={POST_VIEWS.VIEW1}
							/>
						</div>
						<div className="post-row-aside">
							<Post
								postObj={mockDataPosts[rowArr[1]]}
								postView={POST_VIEWS.VIEW3}
							/>
						</div>
					</div>
				);
			}

			if (rowArr.length === 2 && rowArr[0] !== 0) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main">
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={POST_VIEWS.VIEW2}
							/>
							<Post
								postObj={mockDataPosts[rowArr[1]]}
								postView={POST_VIEWS.VIEW2}
							/>
						</div>
					</div>
				);
			}

			if (rowArr.length === 3 && rowArr[0] === 0) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main">
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={POST_VIEWS.VIEW1}
							/>
						</div>
						<div className="post-row-aside">
							<Post
								postObj={mockDataPosts[rowArr[1]]}
								postView={POST_VIEWS.VIEW3}
							/>
							<Post
								postObj={mockDataPosts[rowArr[2]]}
								postView={POST_VIEWS.VIEW3}
							/>
						</div>
					</div>
				);
			}
			if (rowArr.length === 3 && rowArr[0] !== 0) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main">
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={POST_VIEWS.VIEW2}
							/>
							<Post
								postObj={mockDataPosts[rowArr[1]]}
								postView={POST_VIEWS.VIEW2}
							/>
						</div>
						<div className="post-row-aside">
							<Post
								postObj={mockDataPosts[rowArr[2]]}
								postView={POST_VIEWS.VIEW3}
							/>
						</div>
					</div>
				);
			}
			if (rowArr.length === 4) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main">
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={POST_VIEWS.VIEW2}
							/>
							<Post
								postObj={mockDataPosts[rowArr[1]]}
								postView={POST_VIEWS.VIEW2}
							/>
						</div>
						<div className="post-row-aside">
							<Post
								postObj={mockDataPosts[rowArr[2]]}
								postView={POST_VIEWS.VIEW3}
							/>
							<Post
								postObj={mockDataPosts[rowArr[3]]}
								postView={POST_VIEWS.VIEW3}
							/>
						</div>
					</div>
				);
			}
		}
		if (windowSize.width <= 1024 && windowSize.width >= 768) {
			if (rowArr.length === 1) {
				return (
					<div key={rowArr[0]} className="posts-row" style={{ width: "100%" }}>
						<div className="post-row-main" style={{ width: "100%" }}>
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={rowArr[0] === 0 ? POST_VIEWS.VIEW1 : POST_VIEWS.VIEW2}
							/>
						</div>
					</div>
				);
			}

			if (rowArr.length === 2) {
				return (
					<div key={rowArr[0]} className="posts-row">
						<div className="post-row-main" style={{ width: "100%" }}>
							<Post
								postObj={mockDataPosts[rowArr[0]]}
								postView={rowArr[0] === 0 ? POST_VIEWS.VIEW1 : POST_VIEWS.VIEW2}
							/>
							<Post
								postObj={mockDataPosts[rowArr[1]]}
								postView={POST_VIEWS.VIEW2}
							/>
						</div>
					</div>
				);
			}
		}
		if (windowSize.width > 550 && windowSize.width < 768) {
			return (
				<div key={rowArr[0]} className="posts-row" style={{ width: "100%" }}>
					<div className="post-row-main" style={{ width: "100%" }}>
						<Post
							postObj={mockDataPosts[rowArr[0]]}
							postView={POST_VIEWS.VIEW1}
						/>
					</div>
				</div>
			);
		}

		if (windowSize.width <= 550) {
			return (
				<div key={rowArr[0]} className="posts-row" style={{ width: "100%" }}>
					<div className="post-row-main" style={{ width: "100%" }}>
						<Post
							postObj={mockDataPosts[rowArr[0]]}
							postView={POST_VIEWS.VIEW3}
						/>
					</div>
				</div>
			);
		}
	};

	const posts: Array<number[]> = [];
	let p: Array<number> = [];
	let n: number = 0;

	if (windowSize.width > 1024) {
		for (let i = 0; i < mockDataPosts.length; i++) {
			p.push(i);
			n++;
			if ((n === 3 && i === 2) || n === 4) {
				posts.push(p);
				n = 0;
				p = [];
			}
		}
		if (p.length) {
			posts.push(p);
		}
	}

	if (windowSize.width <= 1024 && windowSize.width >= 768) {
		for (let i = 0; i < mockDataPosts.length; i++) {
			p.push(i);
			n++;
			if (n === 1 && i === 0) {
				posts.push(p);
				n = 0;
				p = [];
			}
			if (n === 2) {
				posts.push(p);
				n = 0;
				p = [];
			}
		}
		if (p.length) {
			posts.push(p);
		}
	}

	if (windowSize.width < 768) {
		for (let i = 0; i < mockDataPosts.length; i++) {
			posts.push([i]);
		}
	}

	return (
		<section className="posts-grid">{posts.map((el) => PostRow(el))}</section>
	);
};
export default PostsGrid;
