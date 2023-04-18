import { USER_AUTHORIZE } from "../action-types/index";

const setAuthorize = (authorizedUserName:string) => ({
    type: USER_AUTHORIZE,
    authorizedUserName
});

export { setAuthorize };