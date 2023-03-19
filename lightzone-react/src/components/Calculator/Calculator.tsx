import './Calculator.css'
import { useState } from "react"

const Calculator = () => {
    const [a,setA] = useState(0)
    const [b,setB] = useState(0)
    const [operator, setOperator] = useState('+')
    let res = a+b
    switch(operator){
        case 'A - B =': res = a-b
            break
        case 'A * B =': res = a*b
            break
        case 'A / B =': res = a/b
            break
    }

    return (
        <div className="calculator">
            <div className="calculator__wrapper">
                <label className='calculator__label' htmlFor='arg1'>A=</label>
                <input type="text" className="calculator__arg" name='arg1' placeholder = '0' maxLength={10}
                    style={{
                        color: isNaN(Number(a)) ? 'red' : 'black',
                        borderColor: isNaN(Number(a)) ? 'red' : 'transparent'
                    }}
                    onChange={(e) => setA(Number(e.target.value))} />
                <label className = 'calculator__label' htmlFor='arg2'>B=</label>
                <input type="text" className="calculator__arg" name='arg2' placeholder = '0' maxLength={10}
                    style={{
                        color: isNaN(Number(b)) ? 'red' : 'black',
                        borderColor: isNaN(Number(b)) ? 'red' : 'transparent'
                    }}
                    onChange={(e) => setB(Number(e.target.value))} />
                <select className="calculator__operators-select" name= 'result' onChange ={(e)=>setOperator(e.target.value)}>
                    <option className="calculator__operator">A + B =</option>
                    <option className="calculator__operator">A - B =</option>
                    <option className="calculator__operator">A * B =</option>
                    <option className="calculator__operator">A / B =</option>
                </select>
                <label className="calculator__result" htmlFor='result'
                    style={{ color: isNaN(res) ? 'red' : 'black' }}>
                    {isNaN(res) ? 'Error' : res}
                </label>
            </div>
        </div>
    )
}

export default Calculator