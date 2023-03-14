interface IButton {
    content: string,
    isActive: boolean,
    callback: Function,
    buttonStyle: any,
}
const Button = ({content, isActive, callback, buttonStyle}: IButton) => {
    return (
        <button
            className="custom-button"
            disabled={!isActive}
            onClick={() => callback()}
            style={buttonStyle}
        >
            {content}
        </button>
    )
}

export default Button;
