import React from 'react'

const Home = () => {
  return (
    <div>

      <div className='w-full h-96 mb-10 bg-slate-300'>
        <div className='b-1'>
          슬라이드
        </div>
      </div>

      <div className='max-w-6xl mx-auto bg-slate-400'>

        <div className='h-2/5 mb-10 flex space-x-3 bg-slate-500'>
          <div className='b-3'>
            블로그 1
          </div>
          <div className='b-3'>
            블로그 2
          </div>
          <div className='b-3'>
            블로그 3
          </div>
        </div>

        <div className='h-2/5 flex bg-slate-600'>
          <div className='b-2'>
            상품 1
          </div>
          <div className='b-2'>
            상품 2
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home