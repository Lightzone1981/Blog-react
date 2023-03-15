import './Buttons.css'
import Button from './Button'

const Buttons = () => {
    return (
      <div className="buttons-wrapper">
            <h2 className='title'>Buttons</h2>
            <Button content = 'Primary' bgcolor='blue' color = '#fff' isActive={true} gridAreaName = 'b2' callback = {() => console.log('I\'m Primary blue')}/> 
            <Button content = 'Secondary' bgcolor='#999' color = '#fff' isActive={true} gridAreaName = 'b3' callback = {() => console.log('I\'m Secondary-1')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='blue' isActive={false} gridAreaName = 'b4'callback = {() => console.log('I\'m Secondary 2')}/>
            
            <Button content='Primary' bgcolor='red' color='#fff' isActive={true} gridAreaName = 'b5' callback={() => console.log('I\'m Primary red')} /> 
            <Button content = 'Secondary' bgcolor='#777' color = '#fff' isActive={true} gridAreaName = 'b6' callback = {() => console.log('I\'m Secondary-2')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='red' isActive={false} gridAreaName = 'b7' callback = {() => console.log('I\'m Secondary 2')}/>
            
            <Button content='Primary' bgcolor='green' color='#fff' isActive={true} gridAreaName = 'b8' callback={() => console.log('I\'m Primary green')} /> 
            <Button content = 'Secondary' bgcolor='#555' color = '#fff' isActive={true} gridAreaName = 'b9' callback = {() => console.log('I\'m Secondary-3')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='green' isActive={false} gridAreaName = 'b10'callback = {() => console.log('I\'m Secondary 2')}/>
      </div>
    )
  }
  
  export default Buttons;