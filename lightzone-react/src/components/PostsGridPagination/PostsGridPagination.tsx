import './PostsGridPagination.css'
import { IPagination, IStoreState } from '../../types';
import ArrowIcon from '../Icons/ArrowIcon';
import { useSelector } from 'react-redux';

const PostsGridPagination = ({ activeItem, itemsCount, callback }: IPagination) => {
	const theme = useSelector((state: IStoreState) => state.ui.theme);
    
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

        <section className="pagination" data-theme={`${theme}`}>
            <div className="pagination__button" id='pagination-button-prev' data-active={activeItem === 1 ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                {theme === 'light' ?
                    <ArrowIcon width='18' height='15' color='#000' />
                    : <ArrowIcon width='18' height='15' color='#FFF' />
                }
                <span className="pagination__button-text">Prev</span>
            </div>
            <ul className="pagination__list">
                {linksList}
            </ul>
            <div className="pagination__button" id='pagination-button-next' data-active={activeItem === itemsCount ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <span className="pagination__button-text">Next</span>
                {theme === 'light' ?
                    <ArrowIcon width='18' height='15' color='#000' />
                    : <ArrowIcon width='18' height='15' color='#FFF' />
                }
            </div>
        </section>
    )
}

export default PostsGridPagination