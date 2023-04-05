import './BurgerMenu.css'
import UserAvatar from '../UserAvatar/UserAvatar';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../contexts/themeContext";
import { AuthorizeContext } from '../../contexts/authorizeContext';
import { useContext } from 'react';

const Menu = ({ visible } : { visible: boolean}) => {
	const { theme, setTheme } = useContext (ThemeContext)
	const { authorize, setAuthorize } = useContext (AuthorizeContext)
    
    return (
        <ul className="menu" data-visible={`${visible}`} data-authorize={`${authorize.status}`}>
            {authorize.status ?
                <li key={'item-1'} className='menu__item'>
                    <UserAvatar username='Evgeniy_Lebedevski' location='menu' />
                </li>
                : <></>
            }

            <li key={'item-2'} className='menu__item'>
            <Link to={`/posts/`} style={{ textDecoration: 'none', color: '#313037' }}>
                <a className='menu__link' href='#'>Home</a>
			</Link>
            </li>

            {authorize.status ?
                <>
                <li key={'item-3'} className='menu__item'>
                    <a className='menu__link' href='#'>Add post</a>
                </li>
                <li key={'item-4'} className='menu__item'>
                    <a className='menu__link' href='#'>Profile</a>
                </li>
                </>
                : <></>
            }
            
            <li key={'item-5'} className='menu__item menu__item--divider'>
            </li> 
            
            <li key={'item-6'} className='menu__item mode-checker'>
                <button className="mode-checker__button" data-theme={`${theme}`} onClick={()=>setTheme('light') }>
                    <SunIcon width='24' height='24' color='#313037'/>
                </button> 
                <button className="mode-checker__button" data-theme={`${theme}`} onClick={() => setTheme('dark')}>
                    <MoonIcon width='24' height='24' color='#313037'/>
                </button>
            </li>
            {authorize.status?
                <li key={'item-7'} className='menu__item'>
                    <Link to={'/'} className='log-button' style={{textDecoration:'none'}}>
                        <button className='log-button' onClick={()=>{setAuthorize({ status: false, username: ''})}}>Log out</button>
                    </Link>
                </li>
                :
                <li key={'item-7'} className='menu__item'>
                    <Link to={'/sign-in'} className='log-button' style={{textDecoration:'none'}}>
                        Sign in
                    </Link>
                </li>
            }
        </ul>
    )  
}
export default Menu