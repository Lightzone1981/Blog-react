import {POST_VIEWS } from "../../constants/posts-constants";
import Post from "./Post/Post";
import { IPostInfo } from '../../types';

const PostRow = (rowArr:IPostInfo[], firstIndex:number, windowSize: any) => {

    if (windowSize.width > 1024) {
        if (rowArr.length === 1) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main">
                        <Post
                            postObj={rowArr[0]}
                            postView={firstIndex === 0 ? POST_VIEWS.VIEW1 : POST_VIEWS.VIEW2}
                        />
                    </div>
                </div>
            );
        }

        if (rowArr.length === 2 && firstIndex === 0) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main">
                        <Post
                            postObj={rowArr[0]}
                            postView={POST_VIEWS.VIEW1}
                        />
                    </div>
                    <div className="post-row-aside">
                        <Post
                            postObj={rowArr[1]}
                            postView={POST_VIEWS.VIEW3}
                        />
                    </div>
                </div>
            );
        }

        if (rowArr.length === 2 && firstIndex !== 0) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main">
                        <Post
                            postObj={rowArr[0]}
                            postView={POST_VIEWS.VIEW2}
                        />
                        <Post
                            postObj={rowArr[1]}
                            postView={POST_VIEWS.VIEW2}
                        />
                    </div>
                </div>
            );
        }

        if (rowArr.length === 3 && firstIndex === 0) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main">
                        <Post
                            postObj={rowArr[0]}
                            postView={POST_VIEWS.VIEW1}
                        />
                    </div>
                    <div className="post-row-aside">
                        <Post
                            postObj={rowArr[1]}
                            postView={POST_VIEWS.VIEW3}
                        />
                        <Post
                            postObj={rowArr[2]}
                            postView={POST_VIEWS.VIEW3}
                        />
                    </div>
                </div>
            );
        }
        if (rowArr.length === 3 && firstIndex !== 0) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main">
                        <Post
                            postObj={rowArr[0]}
                            postView={POST_VIEWS.VIEW2}
                        />
                        <Post
                            postObj={rowArr[1]}
                            postView={POST_VIEWS.VIEW2}
                        />
                    </div>
                    <div className="post-row-aside">
                        <Post
                            postObj={rowArr[2]}
                            postView={POST_VIEWS.VIEW3}
                        />
                    </div>
                </div>
            );
        }
        if (rowArr.length === 4) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main">
                        <Post
                            postObj={rowArr[0]}
                            postView={POST_VIEWS.VIEW2}
                        />
                        <Post
                            postObj={rowArr[1]}
                            postView={POST_VIEWS.VIEW2}
                        />
                    </div>
                    <div className="post-row-aside">
                        <Post
                            postObj={rowArr[2]}
                            postView={POST_VIEWS.VIEW3}
                        />
                        <Post
                            postObj={rowArr[3]}
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
                <div key={rowArr[0].id} className="posts-row" style={{ width: "100%" }}>
                    <div className="post-row-main" style={{ width: "100%" }}>
                        <Post
                            postObj={rowArr[0]}
                            postView={firstIndex === 0 ? POST_VIEWS.VIEW1 : POST_VIEWS.VIEW2}
                        />
                    </div>
                </div>
            );
        }

        if (rowArr.length === 2) {
            return (
                <div key={rowArr[0].id} className="posts-row">
                    <div className="post-row-main" style={{ width: "100%" }}>
                        <Post
                            postObj={rowArr[0]}
                            postView={firstIndex === 0 ? POST_VIEWS.VIEW1 : POST_VIEWS.VIEW2}
                        />
                        <Post
                            postObj={rowArr[1]}
                            postView={POST_VIEWS.VIEW2}
                        />
                    </div>
                </div>
            );
        }
    }
    if (windowSize.width > 550 && windowSize.width < 768) {
        return (
            <div key={rowArr[0].id} className="posts-row" style={{ width: "100%" }}>
                <div className="post-row-main" style={{ width: "100%" }}>
                    <Post
                        postObj={rowArr[0]}
                        postView={POST_VIEWS.VIEW1}
                    />
                </div>
            </div>
        );
    }

    if (windowSize.width <= 550) {
        return (
            <div key={rowArr[0].id} className="posts-row" style={{ width: "100%" }}>
                <div className="post-row-main" style={{ width: "100%" }}>
                    <Post
                        postObj={rowArr[0]}
                        postView={POST_VIEWS.VIEW3}
                    />
                </div>
            </div>
        );
    }
};

export default PostRow