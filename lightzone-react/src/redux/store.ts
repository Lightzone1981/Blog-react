import { createStore, combineReducers } from 'redux';
import { postsReducer, uiReducer, userReducer } from './reducers/index';

export default createStore(combineReducers({posts: postsReducer, ui: uiReducer, user: userReducer}) );