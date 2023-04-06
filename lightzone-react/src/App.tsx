import { Input, TextArea, UserAvatar, Tabs, BurgerMenu, SearchBar, Buttons, Calculator, Wrapper, PostsGrid, Timer, SignUpPage, SignInPage, RegistrationConfirmationPage, SuccessPage,HomePage, MainPage, ContentPage, MainHeader, MainFooter, ColorsTest,AddPostPage} from './components';
import './App.css'
import { mockDataPosts } from './constants/posts-constants';
import { IPostInfo, IMessage } from './types';
import { useState, useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';
import { AuthorizeContext } from './contexts/authorizeContext';
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('light')
  const [authorize, setAuthorize] = useState({ status: false, username: ''})
  
  return (
    <AuthorizeContext.Provider value={{ authorize, setAuthorize }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <div className="wrapper" data-theme={theme}>
          <MainHeader />
            <div className="page-container" data-theme={`${theme}`}>
              <Routes>
                <Route path='/' >
                  <Route index element={<HomePage />} />
                  
                  <Route path='posts' >
                    <Route index element={<MainPage/>}/>
                    <Route path=':postId' element={authorize.status?<ContentPage/>: <Navigate to='/'/>}/>
                  </Route>

                  <Route path='sign-in' element={<SignInPage/>} />
                  <Route path='sign-up' element={<SignUpPage/>} />
                  <Route path='add-post' element={<AddPostPage/>} />
                  <Route path='confirmation' element={<RegistrationConfirmationPage/>} />
                  <Route path='registration-success' element={<SuccessPage/>}/>

                </Route>
              </Routes>
              <MainFooter/>
            </div>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </AuthorizeContext.Provider>
  )
}

export default App;
