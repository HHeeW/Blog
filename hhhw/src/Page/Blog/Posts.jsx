import React from 'react'
import Post from './Post'

const Posts = () => {
  const list = 12;
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
    <div>Posts</div>
  )
}

export default Posts