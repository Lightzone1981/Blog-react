import { Input, TextArea, UserAvatar, Tabs, BurgerMenu, SearchBar, Buttons, Calculator, Wrapper, PostsGrid, Timer, SignUpPage, SignInPage, RegistrationConfirmationPage, SuccessPage,HomePage, MainPage, ContentPage, MainHeader, MainFooter, ColorsTest,AddPostPage} from './components';
import './App.css'
import { mockDataPosts } from './constants/posts-constants';
import { IPostInfo, IMessage,IStoreState } from './types';
import { useState} from 'react';
import { ThemeContext } from './contexts/themeContext';
import { AuthorizeContext } from './contexts/authorizeContext';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModalProfile from './components/ModalProfile/ModalProfile';

const App = () => {
  const theme = useSelector((state: IStoreState) => state.ui.theme);
  const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUserName);
  const profileModalVisible = useSelector((state: IStoreState) => state.ui.profileModalVisibleStatus);

  return (
      <BrowserRouter>
        <div className="wrapper" data-theme={theme}>
        <MainHeader />
        {profileModalVisible?<ModalProfile/>:<></>}
          <div className="page-container" data-theme={`${theme}`}>
            <Routes>
              <Route path='/' >
                <Route index element={<HomePage />} />
                
                <Route path='posts' >
                  <Route index element={<MainPage/>}/>
                  <Route path=':postId' element={authorizedUserName.length?<ContentPage/>: <Navigate to='/'/>}/>
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
  )
}

export default App;
