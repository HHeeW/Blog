import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Page/Home';
import Header from '../Page/Header';
import Blog from '../Page/Blog/Blog';
import SignIn from '../Page/Users/SignIn';
import SignUp from '../Page/Users/SignUp';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}
