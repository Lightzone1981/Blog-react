import './Buttons.css'


const Button = (props: any) => {
    return (
        <button
            className='button'
            type='button'
            disabled={props.disabled}
            onClick={props.callback}
            style={{
                backgroundColor: props.bgcolor,
                color: props.color
            }}>
            {props.content}
      </button>
    )
  }
  
  export default Button;