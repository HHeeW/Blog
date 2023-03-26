import React, { useContext, useEffect } from 'react'
import {
  Link, useNavigate
} from "react-router-dom";
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
  
  const { user } = useContext(AuthContext);
  const { signout } = useContext(AuthContext);
  const { userimpl } = useContext(AuthContext);
  const { userinfo } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);

  const navigate = useNavigate()

  const Signout = () => {
    signout()
    navigate('/')
  }

  useEffect(()=>{
    userimpl().then(()=>{
      if(!!user){
        if(userInfo.length === 0){
          userinfo()
        }
      }
    })
  },[user])

  return (
    <div className="h-14 relative">
      <div className='w-full h-14 flex justify-center fixed bg-gray-400'>
          <div className='w-3/4 max-w-6xl mx-auto flex  justify-between items-center text-xl text-white '>
            <div className='w-1/5 h-full'>
              <div  className='h-full flex justify-start'>
                <Link to={'/'}>
                  <img src='img/Logo.svg' alt='Logo' className='w-full h-full p-1 border-2 border-white rounded-2xl hover:bg-white' />
                </Link>
              </div>
            </div>
            <div className='w-3/5 h-full flex justify-between items-center'>
              <div className='px-2 hover:border-b-4 hover:font-bold'>
                <Link to={'/blog'}>
                  <p>블로그</p>
                </Link>
              </div>
              <div className='px-2 hover:border-b-4 hover:font-bold'>
                <Link to={'/'}>
                  <p>상품</p>
                </Link>
              </div>
              <div className='px-2 hover:border-b-4 hover:font-bold'>
                <Link to={'/'}>
                  <p>ㅂㅂㅂ</p>
                </Link>
              </div>
            </div>
            <div className='w-1/5'>
              <div className='flex justify-end'>
                {!!user ?
                  <>
                    <button type='button' onClick={Signout}>
                        <p className='rounded-full border-2 px-3 hover:text-gray-400 hover:bg-white'>로그아웃</p>
                    </button>
                    <Link to={'/userinfo'}>
                      <p className='rounded-full border-2 px-3 hover:text-gray-400 hover:bg-white'>내정보</p>
                    </Link>
                  </>
                  :
                  <Link to={'/signin'}>
                    <p className='rounded-full border-2 px-3 hover:text-gray-400 hover:bg-white'>로그인</p>
                  </Link>
                }
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Header