import { transform } from '@babel/core';
import './Buttons.css'
import { useState } from 'react';


interface INewButton{
    content: string,
    color: string,
    callback: Function
}



const NewButton = ({ content, color,callback}: INewButton) => {
   
    return (
        <button
            className='button'
            type='button'
            onClick={() => callback()}
            style={{
                color: color,
                backgroundColor: 'red',
            }}>
            {content}
      </button>
    )
  }
  
  export default NewButton;