import './Buttons.css'
import Button from './Button'

const Buttons = () => {
    return (
      <div className="buttons-wrapper">
            <h2 className='title'>Buttons</h2>
            <Button content = 'Primary' bgcolor='blue' color = '#fff' disabled={false} callback = {() => console.log('I\'m Primary')}/> 
            <Button content = 'Secondary' bgcolor='#999' color = '#fff' disabled={false} callback = {() => console.log('I\'m Secondary')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='red' disabled={true} callback = {() => console.log('I\'m Secondary 2')}/>
            
            <Button content='Primary' bgcolor='#557799' color='#fff' disabled={false} callback={() => console.log('I\'m Primary')} /> 
            <Button content = 'Secondary' bgcolor='#999' color = '#fff' disabled={false} callback = {() => console.log('I\'m Secondary')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='red' disabled={true} callback = {() => console.log('I\'m Secondary 2')}/>
            
            <Button content='Primary' bgcolor='#9999' color='#555' disabled={true} callback={() => console.log('I\'m Primary')} /> 
            <Button content = 'Secondary' bgcolor='#999' color = '#777' disabled={false} callback = {() => console.log('I\'m Secondary')}/>
            <Button content='Secondary 2' bgcolor='transparent' color='333' disabled={true} callback = {() => console.log('I\'m Secondary 2')}/>
      </div>
    )
  }
  
  export default Buttons;