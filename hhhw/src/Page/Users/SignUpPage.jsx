import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';
import { removeWhitespace, validateEmail, validatePassword } from '../../utils/Valitate';

const SignUpPage = () => {
    const [email, setEmail] = useState();
    const [echeck, setEcheck] = useState(false);
    const [password, setPassword] = useState();
    const [pcheck, setPcheck] = useState(false);
    const [repassword, setRepassword] = useState();
    const [rpcheck, setRpcheck] = useState(false);

    const { signup } = useContext(AuthContext);

    const EmailCheck = (e) => {
        setEmail(e)
        if(e){
            const changeemail = removeWhitespace(e);
            if(validateEmail(changeemail)){
                setEcheck(true)
            }else{
               setEcheck(false)
               return 
            }
        }
    }

    const PasswordCheck = (p) => {
        setPassword(p)
        if(p) {
            const changepassword = removeWhitespace(p);
            if(validatePassword(changepassword)){
                setPcheck(true)
            }else{
                setPcheck(false)
                return
            }
        }
    }

    const RePasswordCheck = (rp) => {
        setRepassword(rp)
        if(pcheck){
            if(rp){
                if(rp === password){
                    setRpcheck(true)
                }else{
                    setRpcheck(false)
                }
            }
        }
    }

    const handleSignup = () => {
        signup(email, repassword)
      }

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
                <input type="email" className="border p-3 text-center" onChange={(e)=>EmailCheck(e.target.value)}/>
            </div>
            {email ? !!echeck ? <></>:
               <p class="text-red-600">이메일 형식이 옳바르지 않습니다.</p>:<></>
            }
            <button className='border bg-blue-800 
                            hover:bg-blue-500 w-1/3 p-1 my-2 text-white'
                >
                이메일 확인
            </button>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호</label>
                <input type="password" className="border p-3 text-center" onChange={(e)=>PasswordCheck(e.target.value)}/>
            </div>
            {password ? pcheck ? <></> :
                <p class="text-red-600">
                    비밀번호 형식은 영어, 숫자, 문자 포함 8자 이상 16자 이하입니다.
                </p>:<></>
            }
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호 확인</label>
                <input type="password" name='repassword' className="border p-3 text-center" onChange={(e)=>RePasswordCheck(e.target.value)}/>
            </div>

            {repassword ? pcheck ? rpcheck  ? <></>:
                <p class="text-red-600">비밀번호가 일치하지 않습니다.</p>
                : <p class="text-red-600">비밀번호를 먼저 확인 해주세요</p> : <></>
            }

            {echeck && pcheck && rpcheck ?
                <button type="submit" onClick={handleSignup()} className='border bg-blue-800 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>가입</button>
                :<button disabled className='border bg-gray-300 w-full p-4 my-2 text-white'>가입</button>
            }
        </form>
    </div>
    </div>
  )
}

export default SignUpPage