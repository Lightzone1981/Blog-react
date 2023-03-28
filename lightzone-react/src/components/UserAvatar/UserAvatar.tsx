import './UserAvatar.css'

interface IProps{
    username:string
}

const UserAvatar = ({ username }: IProps) => {
    return (
        <div className="user-avatar">
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