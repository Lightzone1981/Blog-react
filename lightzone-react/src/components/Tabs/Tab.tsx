interface ITub{
    label: string, active: string, callback: Function, enable: boolean 
}

const Tab = ({ label, active, callback, enable }:ITub ) => {
    return (
        <li className={
            enable? label !== active ? 'tabs__item' : 'tabs__item tabs__item--active': 'tabs__item tabs__item--disabled'
        }
        onClick={enable?() => callback():()=>{}} >
            {label}
        </li>
    )
  }
  
  export default Tab;