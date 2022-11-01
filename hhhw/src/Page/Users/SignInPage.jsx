import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { validateEmail, removeWhitespace } from '../../utils/Valitate'

const SignInPage = () => {
    
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const { signin } = useContext(AuthContext);

  const handleLogin = () => {
    if(email) {
        const changeemail = removeWhitespace(email);
        if(!validateEmail(changeemail)){
           console.log(validateEmail(changeemail))
          alert('이메일 형식으로 입력하세요.');
           return 
        }  
    }else{
       alert('이메일을 입력하세요.');
        return
    }
    if(!password) {
       alert('비밀번호를 입력하세요.');
        return
    }
    signin(email, password)
  }

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
                <input type="email" className="border p-3 text-center"/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호</label>
                <input type="password" className="border p-3 text-center"/>
            </div>
            <button className='border border-blue-500 bg-blue-800 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>로그인</button>
        </form>
    </div>
    </div>
  )
}

export default SignInPage