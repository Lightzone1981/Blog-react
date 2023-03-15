import './UserAvatar.css'

interface IProps{
    username:string
}

const UserAvatar = ({ username }: IProps) => {
    return (
        <div className="user-avatar"
        style={{
            backgroundColor: 'blue',
            color: '#fff',
            fontFamily: 'Arial'
        }}>
            <div className="user-avatar__short-name"
            style={{
                color: 'blue',
                fontWeight: 'bold',
            }}>
                {username.split('_').reduce((res,el)=>res+el[0].toUpperCase(),'')}
            </div>
            {username.replaceAll('_',' ')}
        </div>
    )
  }
  
  export default UserAvatar;