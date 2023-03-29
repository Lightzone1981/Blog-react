import './Tabs.css'
import Tab from './Tab'
import { ThemeContext } from "../../contexts/themeContext";
import { useState, useContext } from 'react';

interface ITabsArr{
    id:number,
    label: string,
    disabled?:boolean,
}

const Tabs = () => {
    const { theme } = useContext(ThemeContext)
    
    const tabsArr:ITabsArr[] = [
        { id:1, label: 'All'},
        { id:2, label: 'My favorites'},
        { id:3, label: 'Popular'},
    ]
    
    const [active, setTab] = useState('All');
    return (
        <ul className='tabs' data-theme={`${theme}`}>
            {tabsArr.map(el => <Tab key={el.id} label={el.label} active={active}
                callback={() => setTab(el.label)} disabled={el.disabled} />)}
        </ul>
    )
}
  
export default Tabs;