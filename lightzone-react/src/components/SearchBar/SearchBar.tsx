import './SearchBar.css'
import { useState } from 'react';
import SearchIcon from '../Icons/SearchIcon';


const SearchBar = () => {
    const [text, setText] = useState('')
    const [searchInputVisible, setSearchInputVisible] = useState(false)
    return (
        <form className="search-bar">
            <div className="search-bar__input-container" data-visible={`${searchInputVisible}`}>
                <input className='search-bar__input' type='text' placeholder='Search...' value={text} onChange={(e)=> setText(e.target.value)}/>
                <button className={`search-bar__hide-button`} onClick={(e) => {
                    e.preventDefault();
                    setSearchInputVisible(false)
                }}/>
            </div>
            <button className="search-bar__show-button" onClick={(e) => { 
                e.preventDefault();
                setSearchInputVisible(true); 
                setText('')
            }}>
                <SearchIcon width='24' height='24' color='#FFF'/>
                {/* <img className="search-bar__show-button-icon" src={"./icons/search-icon.svg"} alt="search icon" /> */}
            </button>
        </form>
    )
}
export default SearchBar