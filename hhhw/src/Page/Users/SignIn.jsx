import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='container space-y-3'>
        <div className='max-w-[700px] max-auto my-16 mx-auto p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
                로그인
            </h1>
            <p className='py-2'>
                아직 회원에 가입하지 않으셨나요? <Link to='/signup' className='underline font-bold text-lg'>가입</Link> 하세요.
            </p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>이메일 주소</label>
                <input type="email" v-model="email" className="border p-3 text-center"/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호</label>
                <input type="password" v-model="password" className="border p-3 text-center"/>
            </div>
            <button className='border border-blue-500 bg-blue-800 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>로그인</button>
        </form>
    </div>
    </div>
  )
}

export default SignIn