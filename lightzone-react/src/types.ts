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
    postView:string
}