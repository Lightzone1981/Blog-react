import { IPost } from "../../types";
import './PostContent.css'


const PostContent = ({postObj}: IPost) => {
    return (
        <>
        <header className="post__header">
            <a href="#" className="back-home-link">Home</a>
            <p className="post__id">{`|  Post ${postObj.id}`}</p>
        </header>
        <div className="post__container">
            <h2 className="post__title">{`${postObj.title}`}</h2>
            <div className="post__image" style={{ background: `url(${postObj.image}) center/cover` }}></div>
            <p className="post__text">{`${postObj.text}`}</p>
        </div>
        <footer className="post__footer">
            <button className="post__footer-button">
                <img className="post__footer-icon" src={"./icons/like-icon.svg"} alt="like icon" />
            </button>
            <button className="post__footer-button">
			    <img className="post__footer-icon post__footer-icon--rotate" src={"./icons/like-icon.svg"} alt="dislike icon" />
            </button>
            <button className="post__footer-button">
                <img className="post__footer-icon" src={"./icons/bookmark-icon.svg"} alt="bookmark icon" />
                <p className="post__button-text">Add to favorites</p>
            </button>
			
        </footer>
        </>
    )
}
export default PostContent