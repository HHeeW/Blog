import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Page/Home';
import Header from '../Page/Header';
import Blog from '../Page/Blog/Blog';
import SignInPage from '../Page/Users/SignInPage';
import SignUpPage from '../Page/Users/SignUpPage';
import UserInfoPage from '../Page/Users/UserInfoPage';
import CreatePost from '../Page/Blog/CreatePost';

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/userinfo' element={<UserInfoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router