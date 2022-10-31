import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Page/Home';
import Header from '../Page/Header';
import Blog from '../Page/Blog/Blog';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  )
}
