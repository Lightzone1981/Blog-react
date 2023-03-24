import { IPostInfo } from '../types';
import { ROW_VIEWS} from "../constants/posts-constants";

interface IRes {
    arr: Array<IPostInfo[]>,
    arrIndex: number
}
const getRowsArray = (array: IPostInfo[], rowView: string): Array<IPostInfo[]> => {
    if (rowView === ROW_VIEWS.VIEW1) {
        return array.reduce((res: IRes, el: IPostInfo, index: number, arr: IPostInfo[]) => {
            res.arr[res.arrIndex].push(el)
            if (index === 2 || (index - 2) % 4 === 0 && arr[index + 1]) {
                res.arrIndex += 1
                res.arr.push([])
            }
            return res
        }, { arr: [[]], arrIndex: 0 }).arr
    }
    
    if (rowView === ROW_VIEWS.VIEW2) {
        return array.reduce((res: IRes, el: IPostInfo, index: number, arr: IPostInfo[]) => {
            res.arr[res.arrIndex].push(el)
            if (index === 0 || (index) % 2 === 0 && arr[index + 1]) {
                res.arrIndex += 1
                res.arr.push([])
            }
            return res
        }, { arr: [[]], arrIndex: 0 }).arr
    }

    if (rowView === ROW_VIEWS.VIEW3) {
        return array.reduce((res: Array<IPostInfo[]>, el: IPostInfo, index: number) => {
            res.push([])
            res[index].push(el)
            return res
        }, [])
    }
    return[[]]
}

export default getRowsArray