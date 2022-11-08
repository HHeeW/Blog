import React from 'react'

const ListButton = ({listnum}) => {
  let lists = [];
  for(let i=1; i <= listnum; i++){
    lists.push( 
        <button className='w-6 h-6 m-1 bg-slate-400'>
            {i}
        </button>
      )
  }
  return (
    <div className='w-full flex justify-center'>
        {lists}
    </div>
  )
}

export default ListButton