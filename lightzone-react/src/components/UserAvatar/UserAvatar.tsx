import './UserAvatar.css'

const UserAvatar = (props: string) => {
    return (
        <div className="user-avatar">
            {props.username}
        </div>
    )
  }
  
  export default UserAvatar;