import './BurgerMenu.css'
import UserAvatar from '../UserAvatar/UserAvatar';
import { ThemeContext } from "../../contexts/themeContext";

import { useContext } from 'react';
interface IItem {
    id:number,
    content: string,
    url:string
}


const Menu = ({ visible, itemsArray }: { visible: boolean, itemsArray: IItem[] }) => {
	const { theme, setTheme } = useContext (ThemeContext)
    
    return (
        <ul className="menu" data-visible={`${visible}`}>
            <li key={'item-1'} className='menu__item'>
                <UserAvatar username='Evgeniy_Lebedevski'/>
            </li>
            <li key={'item-2'} className='menu__item'>
                <a className='menu__link' href='#'>Home</a>
            </li>
            <li key={'item-3'} className='menu__item'>
                <a className='menu__link' href='#'>Add post</a>
            </li>
            <li key={'item-4'} className='menu__item'>
                <a className='menu__link' href='#'>Profile</a>
            </li>
            <li key={'item-5'} className='menu__item menu__item--divider'>
            </li>
            <li key={'item-6'} className='menu__item mode-checker'>
                <button className="mode-checker__button" data-theme={`${theme}`} onClick={()=>setTheme('light') }>
                    <img className="mode-checker__button-icon" id='light-mode-button' src={"./icons/sun-icon.svg"} alt="light mode icon"
                         />
                </button> 
                <button className="mode-checker__button" data-theme={`${theme}`} onClick={()=>setTheme('dark') }>
                    <img className="mode-checker__button-icon" id='dark-mode-button' src={"./icons/moon-icon.svg"} alt="dark mode icon" />
                </button>
            </li>
            <li key={'item-7'} className='menu__item'>
                <button className='log-button' >Log out</button>
            </li>
        </ul>
    )  
}
export default Menu