import './UserAvatar.css'
import UserIcon from '../Icons/UserIcon'
import { IUserAvatar } from '../../types'
// import { AuthorizeContext } from '../../contexts/authorizeContext'
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import { Link } from "react-router-dom";


const UserAvatar = ({ location }: IUserAvatar) => {

    const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUserName);

    return (
        <div className="user-avatar" data-location={`${location}`}>
            {authorizedUserName === ""? 
                <button className="user-avatar__button" title='Sign In'>
                    <Link
						to={"/sign-in"}>
                        <UserIcon width='24' height='24' color='#fff'/>
						
					</Link>

                </button>
                : <>
                    <div className="user-avatar__short-name">
                        {authorizedUserName.split('_').reduce((res:string,el:string)=>res+el[0].toUpperCase(),'')}
                   </div>
                    {authorizedUserName.replaceAll('_', ' ')}
                </>
            }
        </div>
    )
  }
  
  export default UserAvatar;