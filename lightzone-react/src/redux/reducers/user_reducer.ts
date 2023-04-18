import { USER_AUTHORIZE } from '../action-types/index';

const initialState = {
    authorizedUserName: ''
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_AUTHORIZE: {
            const { authorizedUserName } = action;
            return ({
                ...state,
                authorizedUserName
            })
        }
            
        default: {
            return state
        }
    }
}

export { userReducer };