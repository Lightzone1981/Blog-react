import { transform } from '@babel/core';
import './Button.css'

interface IButton{
    className: string,
    content: string,
    isActive: boolean,
    callback: Function,
}


const Button = ({className, content, isActive, callback}: IButton) => {
    return (
        <button
            className={className}
            type='button'
            disabled={!isActive}
            onClick={(e) => callback(e)}
            title={isActive ? '' : `I'm disabled :(`}
            style={{
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