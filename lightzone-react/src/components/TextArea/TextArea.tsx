import './TextArea.css'

interface ITextArea{
    className:string,
    label?: string,
    placeholder?: string,
    isEnable?: boolean,
    rows?: number,
    cols?: number,
    callback: Function
}

const TextArea = ({className, rows, cols, label, placeholder, isEnable, callback}:ITextArea) => {
    const labelComponent = label? <p className='textarea__label'>{label}</p>:''
    return (
        <div className="textarea-container" key={className}>
            {labelComponent}
            <textarea className={className} rows={rows} cols={cols} placeholder={placeholder} disabled={!isEnable}
            onChange={(e) => callback(e)} />
        </div>
    )
}

export default TextArea