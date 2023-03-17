import { UserAvatar } from './components';
import { Tabs } from './components'
import {BurgerMenu} from './components'
import {SearchBar} from './components'
import './App.css'

const App = () => {

  return (
    <div className="wrapper">
      <header className="main-header">
      <BurgerMenu/>
      <SearchBar/>
      <UserAvatar username='Evgeniy_Lebedevski'/>
      </header>

     <Tabs/> 
    </div>
  )
}

export default App;
