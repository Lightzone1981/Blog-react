import './SearchBar.css'
import ClearButton from './ClearButton'
import { useState } from 'react';



const SearchBar = () => {
    const [text, setText] = useState('')

    return (
        <form className="search-bar">
            <input className='search-bar__input' type='text' placeholder='Search...' value={text} onChange={(e)=> setText(e.target.value)}/>
            <ClearButton buttonType='erase' callback={() => {setText('')}} />
            <div className="search-bar__submit-wrapper">
                <input className='search-bar__submit' type='submit' value='' onClick={(e) => {
                    e.preventDefault();
                    console.log(text);
                }} />
            </div>
        </form>
    )
}
export default SearchBar