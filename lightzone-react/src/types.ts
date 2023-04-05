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