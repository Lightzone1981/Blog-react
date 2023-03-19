interface ITub{
    label: string,
    active: string,
    callback: Function,
    disabled?: boolean 
}

const Tab = ({ label, active, callback, disabled }:ITub ) => {
    return (
        <li className={
            !disabled? label !== active ? 'tabs__item' : 'tabs__item tabs__item--active': 'tabs__item tabs__item--disabled'
        }
        onClick={!disabled?() => callback():()=>{}} >
            {label}
        </li>
    )
  }
  
  export default Tab;