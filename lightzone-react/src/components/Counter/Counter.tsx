import { useState } from 'react';
import NewButton from '../Buttons/newButton';
import './Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0);
    const changeCount = (c: number): number => {
        c++
      setCount(c)
    return c 
}
    
    return (
        <>
        <NewButton content='Count' color='white' callback={()=>changeCount(count)} /> 
        <span className='count'>
            {count}
        </span>
        </>
    )
  }
  
  export default Counter;