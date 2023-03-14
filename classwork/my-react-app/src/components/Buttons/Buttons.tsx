import Button from './Button';
import './Buttons.css';

const Buttons = () => {
    return (
        <div className='buttons-wrapper'>
            <span style={{display: 'block', color: 'red'}}>BUTTONS</span>
            <div style={{display: 'flex', marginTop: 100}}>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                    <Button
                    content='Primary'
                    isActive={true}
                    callback={() => console.log(1)}
                    buttonStyle={{color: 'white', backgroundColor: 'blue'}}
                    />
                </div>
                 <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                    <Button content='Secondary' isActive={true} callback={() => console.log(2)} buttonStyle={{color: 'gray', backgroundColor: 'lightgray', border: 'none'}}/>
                </div>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                    <Button content='Secondary 2' isActive={false} callback={() => console.log(3)} buttonStyle={{color: 'red', border: 'none'}}/>
                </div>
            </div>
        </div>
    )
}

export default Buttons;