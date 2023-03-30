import './UserAvatar.css'

interface IProps{
    username: string,
    location: string
}

const UserAvatar = ({ username, location }: IProps) => {
    return (
        <div className="user-avatar" data-location={`${location}`}>
            {username === "" ? 
                <button className="user-avatar__button">
                    <img className="user-avatar__button-icon" src={"./icons/user-icon.svg"} alt="user icon" />
                </button>
                : <>
                    <div className="user-avatar__short-name">
                        {username.split('_').reduce((res,el)=>res+el[0].toUpperCase(),'')}
                   </div>
                    {username.replaceAll('_', ' ')}
                </>
            }
        </div>
    )
  }
  
  export default UserAvatar;