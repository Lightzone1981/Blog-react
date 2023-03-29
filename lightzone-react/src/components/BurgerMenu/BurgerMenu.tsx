import { useState } from "react"
import Burger from './Burger'
import Menu from './Menu'

const BurgerMenu = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="burger-menu">
            <Burger active={active} callback={()=>setActive(!active)}/>
            <Menu visible={active} itemsArray={[]} />
        </div>
     )    
}

export default BurgerMenu