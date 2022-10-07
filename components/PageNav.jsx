import React from 'react'

const PageNav = (props) => {
  return (
    <div className='flex w-full flex-row   h-20 items-center p-3 shadow-sm shadow-gray-200 sticky top-0 z-10 bg-white   '>
        <div className='flex w-2/6 font-medium text-2xl ml-8 text-slate-700'>
            {props.title}
        </div>
    </div>
  )
}

export default PageNav