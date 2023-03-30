import './BurgerMenu.css'
interface IBurger{
  active: boolean, callback: Function
}

const Burger = ({ active, callback }:IBurger) => {
    
    return (
      <div className="burger" data-active={`${active}`} onClick = {()=>callback()}>
            <div className="burger__stripe1"></div>
            <div className="burger__stripe2"></div>
            <div className="burger__stripe3"></div>
      </div>
    )  
}
export default Burger