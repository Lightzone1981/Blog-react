import './UserAvatar.css'
import UserIcon from '../Icons/UserIcon'
import { IUserAvatar } from '../../types'
import { AuthorizeContext } from '../../contexts/authorizeContext'
import { useContext } from 'react';


const UserAvatar = ({ location }: IUserAvatar) => {
const {authorize} = useContext (AuthorizeContext)

    return (
        <div className="user-avatar" data-location={`${location}`}>
            {authorize.username === "" || !authorize.status ? 
                <button className="user-avatar__button">
                    <UserIcon width='24' height='24' color='#fff'/>
                </button>
                : <>
                    <div className="user-avatar__short-name">
                        {authorize.username.split('_').reduce((res,el)=>res+el[0].toUpperCase(),'')}
                   </div>
                    {authorize.username.replaceAll('_', ' ')}
                </>
            }
        </div>
    )
  }
  
  export default UserAvatar;