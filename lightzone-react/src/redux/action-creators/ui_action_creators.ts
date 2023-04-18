import { SET_THEME, SET_BURGER_STATUS, SET_POST_MODAL_VISIBLE_STATUS, SET_PROFILE_MODAL_VISIBLE_STATUS } from "../action-types";

const setTheme = (theme:string) => ({
    type: SET_THEME,
    theme
});

const setBurgerStatus = (status:boolean) => ({
    type: SET_BURGER_STATUS,
    burgerStatus:status
});

const setPostModalVisibleStatus = (status:boolean) => ({
    type: SET_POST_MODAL_VISIBLE_STATUS,
    postModalVisibleStatus:status
});

const setProfileModalVisibleStatus = (status:boolean) => ({
    type: SET_PROFILE_MODAL_VISIBLE_STATUS,
    profileModalVisibleStatus:status
});

export { setTheme, setBurgerStatus, setPostModalVisibleStatus, setProfileModalVisibleStatus};