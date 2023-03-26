import React from 'react'
import Post from './CreatePost'

const Posts = () => {
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
    <div>Posts</div>
  )
}

export default Posts