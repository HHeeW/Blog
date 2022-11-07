import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const UserInfoPage = () => {
  
  const [edite, setEdite] = useState(false);
  const [editeInfo, setEditeInfo] = useState({
    name: '',
    age: '',
    tel: '',
    address: '',
  })
  const { userInfo } = useContext(AuthContext);

  const changeinfo = (e, i) => {
    
      setEditeInfo( x => ({
        ...x,
        name: e,

      }))
  }

  const reinfo = () => {
    setEdite(true)
  }
  const save = () => {
    setEdite(false)
  }
  console.log(editeInfo)

  let createTime = ''
  if(userInfo.length !== 0){
   const tstamp = userInfo.createAt.seconds;
   let date = new Date(tstamp * 1000);
   createTime = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`
  }

  return (
    <div className='container'>
      <div className='max-w-[700px] max-auto my-16 mx-auto p-4'>
        <h1 className='text-2xl font-bold py-4'>
            사용자 정보
        </h1>
        <div className='user-info'>
            <p className='font-bold'>이름</p>
            <div className='text-center h-7'>
              {edite ? 
                <input type={'text'} placeholder={userInfo.name} className='text-center' onChange={(e)=> changeinfo(e.target.value, 'name')} /> 
                : <p>{userInfo.name}</p>
              }
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>나이</p>
            <div className='text-center h-7'>
              {edite ? 
                <input type={'text'} placeholder={userInfo.age} className='text-center' /> 
                : <p>{userInfo.age}</p>
              }
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>이메일</p>
            <div className='text-center h-7'>
              { userInfo.email}
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>전화번호</p>
            <div className='text-center h-7'>
              {edite ? 
                <input type={'text'} placeholder={userInfo.tel} className='text-center' /> 
                : <p>{userInfo.tel}</p>
              }
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>주소</p>
            <div className='text-center h-7'>
              {edite ? 
                <input type={'text'} placeholder={userInfo.address} className='text-center' /> 
                : <p>{userInfo.address}</p>
              }
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>가입날짜</p>
            <div className='text-center h-7'>
              {createTime}
            </div>
        </div>
      </div>
      <div className='w-36 mx-auto'>
        {edite ? 
          <button type='button' className='button' onClick={save}>정보 저장 </button>
          :
          <button type='button' className='button' onClick={reinfo}> 회원 정보 수정 </button>
        }
      </div>
    </div>
  )
}

export default UserInfoPage