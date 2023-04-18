import Burger from './Burger'
import Menu from './Menu'
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from "../../types";
import { setBurgerStatus } from "../../redux/action-creators";


const BurgerMenu = () => {
    const dispatch = useDispatch()
    

    return (
        <div className="burger-menu">
            <Burger />
            <Menu />
        </div>
     )    
}

export default BurgerMenu