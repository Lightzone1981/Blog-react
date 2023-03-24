import { Input } from "../Input"
    

interface IInput{
    type: string,
    name?: string,
    label?: string,
    placeholder?: string,
    isEnable?: boolean,
    required?: boolean,
    error?:string,
}

const Registration = () => {
    return (
        
        <Input type='text' name='input-1' label='Name:' placeholder='Enter your name ...' required={false} isEnable={true}/>
    )

}

export default Registration