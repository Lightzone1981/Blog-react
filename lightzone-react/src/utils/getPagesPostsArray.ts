import { IPostInfo, IRes } from '../types';

const getPagesPostsArray = (array: IPostInfo[]): Array<IPostInfo[]> => {
    return array.reduce((res: IRes, el: IPostInfo, index: number, arr: IPostInfo[]) => {
        res.arr[res.arrIndex].push(el)
        if (index === 10 || (index + 2) % 12 === 0 && arr[index + 1]) {
            res.arrIndex += 1
            res.arr.push([])
        }
        return res
    }, { arr: [[]], arrIndex: 0 }).arr
}

export default getPagesPostsArray