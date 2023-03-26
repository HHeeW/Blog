import React from 'react'
import ListButton from './ListButton'
import { Link } from 'react-router-dom'

const Blog = () => {

    const listcount = 10
    const listnum = Math.ceil(listcount / 9)
    

  return (
    <div className='max-w-6xl mx-auto bg-slate-200 mb-32'>
        <div className='b-1 h-[200px]'>
            위치 || 리스트
        </div>
        {/* <Posts/> */}
        <div className='flex flex-col space-y-3'>
            <div className='flex space-x-3'>
                <div className='b-3'>
                포스트 1
                </div>
                <div className='b-3'>
                포스트 2
                </div>
                <div className='b-3'>
                포스트 3
                </div>
            </div>
            <div className='flex space-x-3'>
                <div className='b-3'>
                포스트 1
                </div>
                <div className='b-3'>
                포스트 2
                </div>
                <div className='b-3'>
                포스트 3
                </div>
            </div>
            <div className='flex space-x-3'>
                <div className='b-3'>
                포스트 1
                </div>
                <div className='b-3'>
                포스트 2
                </div>
                <div className='b-3'>
                포스트 3
                </div>
            </div>
        </div>
        <div className='flex justify-around items-center py-2 '>
            <div className='w-3/12 flex justify-start'>
                <p className='btnSearch'> 검색 </p>
            </div>
            <div className='w-6/12 flex justify-center '>
                <ListButton listnum={listnum} />
            </div>
            <div className='w-3/12 flex justify-end'>
                <Link to={'/createpost'}>
                    <button className='btnCreate mr-4'>글쓰기</button>   
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Blog