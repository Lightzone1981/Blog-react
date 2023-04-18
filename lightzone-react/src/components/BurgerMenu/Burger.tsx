import './BurgerMenu.css'
import { IStoreState } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { setBurgerStatus } from '../../redux/action-creators';

const Burger = () => {
  const dispatch = useDispatch()
    
  const burgerStatus = useSelector((state: IStoreState) => state.ui.burgerStatus);

    return (
      <div className="burger" data-active={`${burgerStatus}`} onClick = {()=>dispatch(setBurgerStatus(!burgerStatus))}>
            <div className="burger__stripe1"></div>
            <div className="burger__stripe2"></div>
            <div className="burger__stripe3"></div>
      </div>
    )  
}
export default Burger