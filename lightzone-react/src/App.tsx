import { Input, TextArea, UserAvatar, Tabs, BurgerMenu, SearchBar, Buttons, Calculator, Wrapper, PostsGrid, Timer, SignUpPage, SignInPage, RegistrationConfirmationPage, SuccessPage, MainPage, ContentPage, MainHeader, MainFooter} from './components';
import './App.css'
import { mockDataPosts } from './constants/posts-constants';
import { IPostInfo, IMessage } from './types';
import getRowsArray from './utils/getRowsArray';



const App = () => {
  return (
    <div className="wrapper">
      <MainHeader/>
      {/* <Timer/> */}
      {/* <SignUpPage/> */}
      {/* <SignInPage/> */}
      {/* <RegistrationConfirmationPage message='Please activate your account with the activation link in the email: lightzone@tut.by. Please, check your email' /> */}
      {/* <SuccessPage message='Email confirmed. Your registration is now completed'/> */}
      {/* <ContentPage/> */}
      <MainPage />
      <MainFooter/>
    </div>
  )
}

export default App;
