import './Buttons.css'
import Button from './Button'
import { useState } from 'react';

const Buttons = () => {

  const [outline, setOutline] = useState(false);

  const changeOutline = (outL: boolean):boolean => {
    setOutline(!outL)
  return !outL 
}

  return (
      <>
      <h2 className='title'>Buttons</h2>
      <div className="buttons-wrapper">
        
      <Button content='Test' bgcolor={outline? 'blue': 'green'} color='#fff' isActive={true} 
        callback={() => changeOutline(outline)} />

        
            <Button content = 'Secondary' bgcolor='#999' color = '#fff' isActive={true} callback = {() => console.log('I\'m Secondary-1')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='blue' isActive={false} callback = {() => console.log('I\'m Secondary 2')}/>
            
            <Button content='Primary' bgcolor='red' color='#fff' isActive={true} callback={() => console.log('I\'m Primary red')} /> 
            <Button content = 'Secondary' bgcolor='#777' color = '#fff' isActive={true} callback = {() => console.log('I\'m Secondary-2')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='red' isActive={false} callback = {() => console.log('I\'m Secondary 2')}/>
            
            <Button content='Primary' bgcolor='green' color='#fff' isActive={true} callback={() => console.log('I\'m Primary green')} /> 
            <Button content = 'Secondary' bgcolor='#555' color = '#fff' isActive={true} callback = {() => console.log('I\'m Secondary-3')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='green' isActive={false} callback = {() => console.log('I\'m Secondary 2')}/>
    </div >
    </>
    )
  }
  
  export default Buttons;