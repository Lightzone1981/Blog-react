import { useState } from "react"
import './TextArea.css'

interface ITextArea{
    label?: string,
    placeholder?: string,
    isEnable?: boolean,
    rows?: number,
    cols?: number
}

const TextArea = ({rows, cols, label, placeholder, isEnable}:ITextArea) => {
    const [text, setText] = useState('')
    return (
        <>
        <p className='textarea__label'>{label}</p>
            <textarea className='textarea' rows={rows} cols={cols} placeholder={placeholder} disabled={!isEnable}
            onChange={(e)=>setText(e.target.value)}/>
        </>
    )
}

export default TextArea