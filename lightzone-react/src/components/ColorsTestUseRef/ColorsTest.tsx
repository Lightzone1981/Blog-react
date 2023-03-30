import { useState, useRef, useEffect } from 'react';
import NewButton from '../Buttons/newButton';
import { Input } from '../Input';
import './ColorsTest.css'

const ColorsTest = () => {
    const [inputText, setInputText] = useState('10')

    useEffect(() => {
        colorContainer.current.scrollTo({
            top: +inputText,
            left: 0,
            behavior: 'smooth'
        })
    })
    
    const moveScroll = (coord:number) => {

    colorContainer.current.scrollTo({
        top: coord,
        left: 0,
        behavior: 'smooth'
      })
    }

    const colorContainer = useRef<any>()

    return (
        <>
        <Input
            type='number'
            name='input-1'
            label=''
            placeholder='Enter X coordinate'
            isRequired={true}
            error=''
            isEnable={true}
            isEmpty={inputText === '' ? true : false}
            isValid={true}
            value={inputText}
            callback={(e: any) => setInputText(e.target.value)}
        />
        <NewButton content='Move scroll' color='white' callback={()=> moveScroll(+inputText)} /> 
        
            <div className="colors-container" ref={colorContainer} onScroll={(e:any) => {
                setInputText(e.target.scrollTop)
            }}>
                <span className="color"></span>
                <span className="color"></span>
                <span className="color"></span>
                <span className="color"></span>
                <span className="color"></span>
                <span className="color"></span>
                <span className="color"></span>
                <span className="color"></span>
            </div>   
        </>
    )
  }
  
  export default ColorsTest;