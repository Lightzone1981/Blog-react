import { SET_THEME, SET_BURGER_STATUS, SET_POST_MODAL_VISIBLE_STATUS, SET_PROFILE_MODAL_VISIBLE_STATUS } from '../action-types/index';

const initialState = {
    theme: 'light',
    burgerStatus: false,
    postModalVisible:false,
    profileModalVisible:false
};

const uiReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_THEME: {
            const { theme } = action;
            return ({
                ...state,
                theme
            })
        }
        case SET_BURGER_STATUS: {
            const { burgerStatus } = action;
            return ({
                ...state,
                burgerStatus
            })
        }
            
        case SET_POST_MODAL_VISIBLE_STATUS: {
            const { postModalVisibleStatus } = action;
            return ({
                ...state,
                postModalVisibleStatus
            })
        }
            
        case SET_PROFILE_MODAL_VISIBLE_STATUS: {
            const { profileModalVisibleStatus } = action;
            return ({
                ...state,
                profileModalVisibleStatus
            })
        }
            
        default: {
            return state
        }
    }
}

export { uiReducer };