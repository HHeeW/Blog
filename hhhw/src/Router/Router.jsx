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

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router