import React from 'react'

import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header className='w-full h-14 flex justify-center bg-gray-400'>
        <div className='w-3/4 max-w-6xl mx-auto flex justify-between items-center text-xl text-white font-bold'>
          
          <div className='w-1/5 h-full'>
            <div  className='h-full flex justify-start'>
              <Link to={'/'}>
                <img src='img/Logo.svg' alt='Logo' className='w-full h-full p-1 border-2 border-white rounded-2xl hover:bg-white' />
              </Link>
            </div>
          </div>
          <div className='w-3/5 flex justify-between'>
            <div className='w-auto hover:underline underline-offset-4'>
              <Link to={'/'}>
                <p>블로그</p>
              </Link>
            </div>
            <div className='w-auto hover:underline underline-offset-4'>
              <Link to={'/'}>
                <p>굿즈</p>
              </Link>
            </div>
            <div className='w-auto hover:underline underline-offset-4'>
              <Link to={'/'}>
                <p>ㅂㅂㅂ</p>
              </Link>
            </div>
          </div>
          <div className='w-1/5'>
            <div className='flex justify-end'>
              <Link to={'/'}>
                <p className='rounded-full border-2 px-3 hover:text-gray-400 hover:bg-white'>로그인</p>
              </Link>
            </div>
          </div>

        </div>
    </header>
  )
}

export default Header