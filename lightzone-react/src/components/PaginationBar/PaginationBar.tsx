import './PaginationBar.css'
import { mockDataPosts, ROW_VIEWS} from "../../constants/posts-constants";
import { IPostInfo,IPagination } from '../../types';

const PaginationBar = ({ activeItem, itemsCount, callback }: IPagination) => {
    let itemsArr: string[] = []

    let tripletNum = activeItem % 3 ? Math.floor(activeItem/3) + 1 : Math.floor(activeItem/3)
    if (activeItem === itemsCount && activeItem === tripletNum*3+1) tripletNum = Math.floor(activeItem/3)

    const startIndex = tripletNum * 3 - 2 
    if (tripletNum > 1) itemsArr = itemsArr.concat(['1', '...'])
    let i = startIndex
    while (i < startIndex + 4 && i <= itemsCount) {
        itemsArr.push(String(i))
        i++
    }

    if (i === itemsCount) {
        itemsArr.push(String(i))
    }
    
    if(i<itemsCount)
    itemsArr = itemsArr.concat(['...', String(itemsCount)])
    
    const linksList = itemsArr.map((el: string, index: number, arr: string[]) => {

        return el === '...' ? <li key={`${index}`} className="pagination__item pagination__dots" id={`dots-${index}`} onClick ={(e)=> callback(e)}>{el}</li> :
         <li key={`${index}`} className="pagination__item" id={`item-${el}`} data-active={el === String(activeItem) ? 'true' : 'false'} onClick ={(e)=> callback(e)}>{el}</li>
    })

    return (
        <section className="pagination">
            <div className="pagination__button" id='pagination-button-prev' data-active={activeItem === 1 ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <img className="pagination__button-arrow" src="./icons/arrow-icon.svg" alt="Arrow left" />
                <span className="pagination__button-text">Prev</span>
            </div>
            <ul className="pagination__list">
                {linksList}
            </ul>
            <div className="pagination__button" id='pagination-button-next' data-active={activeItem === itemsCount ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <span className="pagination__button-text">Next</span>
                <img className="pagination__button-arrow" src="./icons/arrow-icon.svg" alt="Arrow left" />
            </div>
        </section>
    )
}

export default PaginationBar