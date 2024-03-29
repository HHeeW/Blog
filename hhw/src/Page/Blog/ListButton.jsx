import React from 'react'

const ListButton = ({listnum}) => {
  let lists = [];
  for(let i=1; i <= listnum; i++){
    lists.push(
        <button className='w-6 h-6 m-1 rounded-full text-white bg-cyan-600'>
            {i}
        </button>
      )
  }
  return (
    <div>
        {lists}
    </div>
  )
}

export default ListButton