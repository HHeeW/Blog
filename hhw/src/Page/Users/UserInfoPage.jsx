import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { auth, db } from '../../Firebase';

const UserInfoPage = () => {

  const { userInfo } = useContext(AuthContext);
  const [edite, setEdite] = useState(false);
  const [editeInfo, setEditeInfo] = useState({
    name: '',
    age: '',
    tel: '',
    address: '',
  })
console.log(userInfo)
  useEffect(()=>{
    if(userInfo.length !== 0){
      if(editeInfo.name.length === 0){
        setEditeInfo({
          ...editeInfo,
          name: userInfo.name,
          age: userInfo.age,
          tel: userInfo.tel,
          address: userInfo.address
        })
      }
  }
  },[userInfo])

  // const navigate = useNavigate()

  const save = () => {
    console.log(editeInfo)
    updateDoc(doc(db, 'Users', auth.currentUser.uid),{
      name: editeInfo.name,
      age: editeInfo.age,
      tel: editeInfo.tel,
      address: editeInfo.address
    })
    .then(()=>{
      window.location.reload()
    })
    .catch((error)=>{
      console.log('업로드 에러', error)
    })
    setEdite(false)
  }

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
                <input type={'text'} placeholder={userInfo.name} className='text-center' onChange={(e)=> setEditeInfo({...editeInfo, name: e.target.value})} /> 
                : <p>{userInfo.name}</p>
              }
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>나이</p>
            <div className='text-center h-7'>
              {edite ? 
                <input type={'number'} placeholder={userInfo.age} className='text-center' onChange={(e)=> setEditeInfo({...editeInfo, age: e.target.value})} /> 
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
                <input type={'text'} placeholder={userInfo.tel} className='text-center' onChange={(e)=> setEditeInfo({...editeInfo, tel: e.target.value})} /> 
                : <p>{userInfo.tel}</p>
              }
            </div>
        </div>
        <div className='user-info'>
            <p className='font-bold'>주소</p>
            <div className='text-center h-7'>
              {edite ? 
                <input type={'text'} placeholder={userInfo.address} className='text-center' onChange={(e)=> setEditeInfo({...editeInfo, address: e.target.value})} /> 
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
      {edite ? 
        <div className='flex w-72 mx-auto'>
          <button type='button' className='button' onClick={save}>정보 저장 </button>
          <button type='reset' className='button' onClick={()=>setEdite(false)}>취소 </button>
        </div>
        :
        <div className='w-36 mx-auto'>
          <button type='button' className='button w-36 mx-auto' onClick={()=>setEdite(true)}> 회원 정보 수정 </button>
        </div>
      }
    </div>
  )
}

export default UserInfoPage