import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreatePost = () => {
  
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo)
  return (
    <div className=' h-full'>
      <form className='w-4/6 h-5/6 m-auto my-10'>
        <div>
          {/* <p>{userimpl}</p> */}
          <p>{userInfo.name}</p>
        </div>
        <table className='w-full h-full flex justify-between flex-wrap items-center border-2 border-black'>
          <tr className='w-full h-10 flex justify-between'>
            <td className='w-1/5 flex items-center border-2 border-black rounded-md'>
              <p className='text-center w-full'>제목</p>
            </td>
            <td className='w-3/4 border-2 border-black'>
              <input type="text" className='w-full h-full' name='postTitle' placeholder='게시물 제목' />
            </td>
          </tr>
          <tr className='w-full h-3/5 flex justify-between '>
            <td className='w-1/5 border-2 border-black'>
              <p className=' text-center'>이미지</p>
            </td>
            <td className='w-3/4 border-2 border-black'>
              <input type="file" multiple="true" name='postImages' />
            </td>
          </tr>

          <tr className='w-full h-1/3 flex justify-between '>
            <td className='w-1/5 border-2 border-black'>
              <p className=' text-center'>내용</p>
            </td>
            <td className='w-3/4 border-2 border-black'>
              <textarea className='w-full h-full resize-none' name='postDetail' placeholder='게시물 내용'></textarea>
            </td>
          </tr>
        </table>
        <div>
          <button type='submit' className=' bg-slate-500 text-white px-4 py-2 rounded-xl'> 글 저장 </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost