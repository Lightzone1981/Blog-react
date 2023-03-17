import Burger from './Burger'
import Menu from './Menu'
import { useState } from "react"

interface IItem {
    id:number,
    content: string,
    url:string
}

const BurgerMenu = () => {
    const [active, setActive] = useState(false)

    const menuItemsArr: IItem[] = [
        {id:1, content:'Youtube', url:'https://www.youtube.com/'},
        {id:2, content:'Instagram', url:'https://www.instagram.com/'},
        {id:3, content:'Facebook', url:'https://www.facebook.com/'},
    ]
    return (
        <div className="burger-menu">
            <Burger active={active} callback={()=>setActive(!active)}/>
            <Menu visible={active} itemsArray={menuItemsArr} />
        </div>
     )    
}

export default BurgerMenu