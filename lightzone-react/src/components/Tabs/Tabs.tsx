import { useState } from 'react';
import './Tabs.css'
import Tab from './Tab'

interface ITabsArr{
    id:number,
    label: string,
}

const Tabs = () => {
    const tabsArr:ITabsArr[] = [
        { id:1, label: 'All'},
        { id:2, label: 'My favorites'},
        { id:3, label: 'Popular'},
        { id:4, label: 'Disabled tab'},
    ]
    
    const [active, setTab] = useState('All');
    return (
        <ul className='tabs'>
            {tabsArr.map(el => <Tab key={el.id} label={el.label} active={active}
                callback={() => setTab(el.label)} enable={el.id === 4 ? false:true} />)}
        </ul>
    )
}
  
export default Tabs;