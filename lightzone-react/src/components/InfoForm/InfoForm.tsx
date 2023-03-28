import Button from "../Buttons/Button"
import './InfoForm.css'
import { IMessage } from '../../types';

const InfoForm = (props:IMessage) => {
    
    return (
        <div className="info-form">
            <p className="form-text">
               {props.message}
            </p>
            <Button
                className='button button-submit'
                content='Go to home'
                isActive={true}
                callback={(e: any) => { e.preventDefault() }}
            />
        </div>
    )
}

export default InfoForm