import { Input, TextArea, UserAvatar, Tabs, BurgerMenu, SearchBar, Buttons, Calculator, Wrapper, PostsGrid, Timer, SignUpPage, SignInPage, RegistrationConfirmationPage, SuccessPage, MainPage, ContentPage, MainHeader, MainFooter, ColorsTest} from './components';
import './App.css'
import { mockDataPosts } from './constants/posts-constants';
import { IPostInfo, IMessage } from './types';
import getRowsArray from './utils/getRowsArray';
import { useState, useContext } from 'react';
import React from 'react';
import { ThemeContext } from './contexts/themeContext';

const App = () => {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>

      <div className="wrapper" data-theme={theme}>
        <MainHeader/>
        <MainPage />
        <SignUpPage/>
        <ContentPage/>
        <SignInPage/>
        <RegistrationConfirmationPage message='Please activate your account with the activation link in the email: lightzone@tut.by. Please, check your email' />
        <SuccessPage message='Email confirmed. Your registration is now completed'/>
        <MainFooter/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
