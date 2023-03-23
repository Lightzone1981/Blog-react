import { useState } from 'react';
import './SelectWrapper.css'

const SelectWrapper=(props: any) => {
    const [selected,setSelected] = useState(false)
    return (
        <div className='wrapper2' data-selected={selected} onClick={()=>setSelected(!selected)}>
            {props.children}
        </div >
    )
}

export default SelectWrapper