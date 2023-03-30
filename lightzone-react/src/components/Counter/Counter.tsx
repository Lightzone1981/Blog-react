import { useState } from 'react';
import NewButton from '../Buttons/newButton';
import './Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <NewButton content='Count' color='white' callback={()=> setCount(count+1)} /> 
        <span className='count'>
            {count}
        </span>
        </>
    )
  }
  
  export default Counter;