import { Input, TextArea, UserAvatar, Tabs, BurgerMenu, SearchBar, Buttons, Calculator, Wrapper, PostsGrid} from './components';
import './App.css'
import { mockDataPosts} from './constants/posts-constants'
import { IPostInfo } from './types';



const App = () => {
const el = <UserAvatar username='A_B'/>
  return (
    <div className="wrapper">
      {/* <header className="main-header">
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
      <Input type='text' name='input-4' label='Title:' placeholder='Text ...' isEnable={false} />
      <br/>
      <br />
      <TextArea rows={10} label='Comment:' placeholder='Add your text ...' isEnable={true} />
      <br/>
      <br/>
      <Buttons /> 
      <br/>
      <br/>
      <Calculator/>
      <br/>
      <br/>
      <Wrapper>{el}</Wrapper>
      <Wrapper>{'Привет'}</Wrapper>
      <Wrapper>{'Привет'}</Wrapper>
      <Wrapper>{'Привет'}</Wrapper>
      <Wrapper>{'Привет'}</Wrapper>
      <br/>
      <br/>
      <br/>
      <br/>
      <br /> */}
      
      <PostsGrid/>
    </div>
  )
}

export default App;
