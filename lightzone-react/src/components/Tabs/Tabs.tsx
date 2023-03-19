import { useState } from 'react';
import './Tabs.css'
import Tab from './Tab'

interface ITabsArr{
    id:number,
    label: string,
    disabled?:boolean,
}

const Tabs = () => {
    const tabsArr:ITabsArr[] = [
        { id:1, label: 'All'},
        { id:2, label: 'My favorites'},
        { id:3, label: 'Popular'},
        { id:4, label: 'Disabled tab', disabled: true},
    ]
    
    const [active, setTab] = useState('All');
    return (
        <ul className='tabs'>
            {tabsArr.map(el => <Tab key={el.id} label={el.label} active={active}
                callback={() => setTab(el.label)} disabled={el.disabled} />)}
        </ul>
    )
}
  
export default Tabs;