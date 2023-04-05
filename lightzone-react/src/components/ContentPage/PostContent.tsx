import { IPostInfo } from "../../types";
import LikeIcon from "../Icons/LikeIcon";
import DislikeIcon from "../Icons/DislikeIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import { Link } from "react-router-dom";
import './PostContent.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { mockDataPosts} from "../../constants/posts-constants";

const PostContent = () => {
    const [postObj, setPostObj] = useState({} as IPostInfo)
    const { postId } = useParams()

    useEffect(() => {
        setPostObj(mockDataPosts.find(el => String(el.id) === postId) || {} as IPostInfo)
        },[]
    )

    
    return (
        <>
        <header className="post__header">
            <Link to={`/posts/`} style={{ textDecoration: 'none', color: '#313037' }}>
                <a href="#" className="back-home-link">Home</a>
			</Link>
            <p className="post__id">{`|  Post ${postObj.id}`}</p>
        </header>
        <div className="post__container">
            <h2 className="post__title">{`${postObj.title}`}</h2>
            <div className="post__image" style={{ background: `url(${postObj.image}) center/cover` }}></div>
            <p className="post__text">{`${postObj.text}`}</p>
        </div>
        <footer className="post__footer">
            <button className="post__footer-button">
                <LikeIcon width='22' height='22' color='#4C4B5E'/>
            </button>
            <button className="post__footer-button">
                <DislikeIcon width='22' height='22' color='#4C4B5E'/>
            </button>
            <button className="post__footer-button">
                <BookmarkIcon width='16' height='22' color='#4C4B5E'/>
                <p className="post__button-text">Add to favorites</p>
            </button>
			
        </footer>
        </>
    )
}
export default PostContent