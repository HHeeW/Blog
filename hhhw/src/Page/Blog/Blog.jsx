import React from 'react'

const Blog = () => {
  return (
    <div className='max-w-6xl mx-auto bg-slate-200'>
        <div className='b-1 h-[200px]'>
            위치
        </div>
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
    </div>
  )
}

export default Blog