import { Input, UserAvatar, Tabs, BurgerMenu, SearchBar } from './components';
import './App.css'

const App = () => {

  return (
    <div className="wrapper">
      <header className="main-header">
      <BurgerMenu/>
      <SearchBar/>
      <UserAvatar username='Evgeniy_Lebedevski'/>
      </header>
      <br/>
      <br/>
      <Tabs /> 
      <br/>
      <br/>
      <Input type='text' name='input-1' label='Name:' placeholder='Enter your name ...' required={false} isEnable={true}/>
      <br/>
      <br/>
      <Input type='email' name='input-2' label='E-mail:' placeholder='Enter your e-mail ...' required={true} error = 'E-mail is not valid' isEnable={true}/>
      <br/>
      <br/>
      <Input type='password' name='input-3' label='Password' placeholder='Enter your password ...'
        required={true} error='Password must contain at least 8 characters' isEnable={true} />
      <br/>
      <br/>
      <Input type='text' name='input-4' label='Title:' placeholder='Text...' isEnable={false} />
    </div>
  )
}

export default App;
