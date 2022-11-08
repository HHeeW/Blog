import React from 'react'
import ListButton from './ListButton'

const Blog = () => {

    const listcount = 20
    const listnum = Math.ceil(listcount / 9)

  return (
    <div className='max-w-6xl mx-auto bg-slate-200 mb-32'>
        <div className='b-1 h-[200px]'>
            위치 || 리스트
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
        <ListButton listnum={listnum} />
    </div>
  )
}

export default Blog