import { transform } from '@babel/core';
import './Buttons.css'

interface IButton{
    content: string,
    bgcolor: string,
    color: string,
    isActive: boolean,
    callback: Function,
}


const Button = ({content, bgcolor, color, isActive, callback}: IButton) => {
    return (
        <button
            className='button'
            type='button'
            disabled={!isActive}
            onClick={() => callback()}
            title={isActive ? '' : `I'm disabled :(`}
            style={{
                backgroundColor: bgcolor,
                color: color,
                opacity: isActive ? 1 : 0.3,
                border: isActive ? 'none' : '1px solid #333',
                cursor: isActive ? 'pointer' : 'default',
                transform: isActive ? '' : 'scale(1)',
            }}>
            {content}
      </button>
    )
  }
  
  export default Button;