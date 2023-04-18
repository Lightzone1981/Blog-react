export interface IStoreState{
    posts: IPostState
    ui: IUiState
    user:IUserState
}

export interface IPostState{
    posts: IPostInfo[],
    selectedPost: IPostInfo
}

export interface IUiState{
    theme: string,
    burgerStatus: boolean,
    postModalVisibleStatus:boolean,
    profileModalVisibleStatus:boolean,
}

export interface IUserState{
    authorizedUserName : string,
}

export interface IPostInfo {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

export interface IPostViews {
    VIEW1: string,
    VIEW2: string,
    VIEW3: string,
}

export interface IRowViews {
    VIEW1: string,
    VIEW2: string,
    VIEW3: string,
}

export interface IPost {
    postObj: IPostInfo,
    postView?:string
}

export interface IRes {
    arr: Array<IPostInfo[]>,
    arrIndex: number
}

export interface IMessage{
    message:string
}

export interface IUserAvatar{
    username: string,
    location: string
}

export interface IUserData{
    username: string,
    email: string,
    password: string,
}

export interface IPagination {
    activeItem: number,
    itemsCount: number,
    callback: Function,
}

export interface ITheme {
    BACKGROUND_COLOR: string,
    TEXT_COLOR: string
}

export interface IIcon {
    width: string,
    height: string,
    color: string,
    hoverColor?: string,
}

export interface IAuthorize{
    status: boolean,
    username:string
}
  
export interface IInput{
    type: string,
    id:string,
    name: string,
    value?: string,
    label?: string,
    placeholder?: string,
    isEnable?: boolean,
    isEmpty: boolean,
    isValid:boolean,
    isRequired?: boolean,
    error?: string,
    callback: Function,
}