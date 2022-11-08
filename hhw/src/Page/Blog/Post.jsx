import React from 'react'

const Post = () => {

  const list = 3;
  let lists = [];
  for(let i in list){
    lists[i] = 
      <Post
        key={i}
        id={i}
        img
        title
        writer
        date
        viewr
        like
      />
  }
  return (
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
  )
}

export default Post