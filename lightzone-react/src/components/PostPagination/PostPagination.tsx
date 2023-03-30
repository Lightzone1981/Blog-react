import './PostPagination.css'
import { IPagination } from '../../types';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const PostPagination = ({ activeItem, itemsCount, callback }: IPagination) => {
    const { theme } = useContext(ThemeContext)

    return (
        <section className="pagination" data-theme={`${theme}`}>
            <div className="pagination__button" id='pagination-button-prev' data-active={activeItem === 1 ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <img className="pagination__button-arrow" src="./icons/arrow-icon.svg" alt="Arrow left" />
                <span className="pagination__button-text">Prev</span>
            </div>
            <div className="pagination__button" id='pagination-button-next' data-active={activeItem === itemsCount ? 'false' : 'true'} onClick ={(e)=> callback(e)}>
                <span className="pagination__button-text">Next</span>
                <img className="pagination__button-arrow" src="./icons/arrow-icon.svg" alt="Arrow left" />
            </div>
        </section>
    )
}

export default PostPagination