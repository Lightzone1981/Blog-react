import { IPostInfo, IRes } from '../types';
import { ROW_VIEWS} from "../constants/posts-constants";

const getRowsArray = (array: IPostInfo[], rowView: string, isFirstPage?:boolean): Array<IPostInfo[]> => {
    if (rowView === ROW_VIEWS.VIEW1) {
        return array.reduce((res: IRes, el: IPostInfo, index: number, arr: IPostInfo[]) => {
            res.arr[res.arrIndex].push(el)

            if ((arr.length === 11 && (index === 2 || (index - 2) % 4 === 0 && arr[index + 1])) ||
            (arr.length !== 11 && (index === 3 || (index + 1) % 4 === 0 && arr[index + 1]))) {
                res.arrIndex += 1
                res.arr.push([])
            }
            return res
        }, { arr: [[]], arrIndex: 0 }).arr
    }
    
    if (rowView === ROW_VIEWS.VIEW2) {
        return array.reduce((res: IRes, el: IPostInfo, index: number, arr: IPostInfo[]) => {
            res.arr[res.arrIndex].push(el)
            if (arr.length === 11 && (index === 0 || (index) % 2 === 0 && arr[index + 1]) ||
            (arr.length !== 11 && ((index+1) % 2 === 0 && arr[index + 1]))) {
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