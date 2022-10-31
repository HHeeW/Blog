import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Page/Home';
import Header from '../Page/Header';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
