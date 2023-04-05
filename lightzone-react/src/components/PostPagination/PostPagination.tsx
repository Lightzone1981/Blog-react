import './PostPagination.css'
import ArrowIcon from '../Icons/ArrowIcon';
import { IPagination } from '../../types';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const PostPagination = ({ activeItem, itemsCount, callback }: IPagination) => {
    const { theme } = useContext(ThemeContext)

    return (
        <section className="pagination" data-theme={`${theme}`}>
            <div className="pagination__button" id='pagination-button-prev' data-active={activeItem === 1 ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <ArrowIcon width='18' height='15' color='#000'/>
                <span className="pagination__button-text">Prev</span>
            </div>
            <div className="pagination__button" id='pagination-button-next' data-active={activeItem === itemsCount ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <span className="pagination__button-text">Next</span>
                <ArrowIcon width='18' height='15' color='#000'/>
            </div>
        </section>
    )
}

export default PostPagination