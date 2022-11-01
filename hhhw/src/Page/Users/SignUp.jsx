import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [pass, setPass] = useState()
    const [pass2, setPass2] = useState()
    const [email, setEamil] = useState()
  return (
    <div className='container'>
        <div className='max-w-[700px] max-auto my-16 mx-auto p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
                회원가입
            </h1>
            <p className='py-2'>
                이미 회원에 가입하셨나요? 바로 <Link to='/signin' className='underline font-bold text-lg'>로그인</Link> 하세요.
            </p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>이메일</label>
                <input type="email"  className="border p-3 text-center"/>
            </div>
            <p class="text-red-600">이메일 형식이 옳바르지 않습니다.</p>
            <button className='border bg-blue-800 
                            hover:bg-blue-500 w-1/3 p-1 my-2 text-white'
                >
                이메일 확인
            </button>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호</label>
                <input type="password" className="border p-3 text-center"/>
            </div>
            <p class="text-red-600">
                비밀번호 형식은 영어, 숫자, 문자 포함 8자 이상 16자 이하입니다.
            </p>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호 확인</label>
                <input type="password" className="border p-3 text-center"/>
            </div>
            <p class="text-red-600">비밀번호가 일치하지 않습니다.</p>

            <button type="submit" className='border bg-blue-800 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>가입</button>
        </form>
    </div>
    </div>
  )
}

export default SignUp