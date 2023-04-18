import { SET_POSTS, SET_SELECTED_POST } from "../action-types/index";
import { IPostInfo } from '../../types';

const setPosts = (posts:IPostInfo[]) => ({
    type: SET_POSTS,
    allPosts: {
        posts
    }
});

const setSelectedPost = (post:IPostInfo) => ({
    type: SET_SELECTED_POST,
    selectedPost: {
        post
    }
});

export { setPosts, setSelectedPost };