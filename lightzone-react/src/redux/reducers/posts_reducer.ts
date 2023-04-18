import { SET_POSTS, SET_SELECTED_POST } from '../action-types/index';
import { IPostInfo } from '../../types';

const initialState = {
    posts: [] as IPostInfo[],
    selectedPost: {} as IPostInfo
};

const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            const { posts } = action.allPosts;
            return ({
                ...state,
                posts: [...posts]
            })
        }
            
        case SET_SELECTED_POST: {
            const { post } = action.selectedPost;
            return ({
                ...state,
                selectedPost: post
            })
        }
        
        default: {
            return state
        }
    }
}

export { postsReducer };