import React from 'react'

export const Header = () => {
  return (
    <div className='flex grid-cols-2 p-5 justify-between'>

      <h2 className='text-6xl text-lime-700'>
        $
      </h2>
      <h2 className='text-4xl p-3 font-serif'>
        Budget Tracker
      </h2>
      <div></div>
    </div>
  )
}