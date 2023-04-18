import './Tabs.css'
import Tab from './Tab'
import { IStoreState } from "../../types";
import { useState} from 'react';
import { useSelector } from 'react-redux';

interface ITabsArr{
    id:number,
    label: string,
    disabled?:boolean,
}

const Tabs = () => {
	const theme = useSelector((state: IStoreState) => state.ui.theme);
    
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