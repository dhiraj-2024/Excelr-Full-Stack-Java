import React from 'react'

export const User = ({color="red",children,name="new user"}) => {
  return (
      <div
          className='border-2  border-dotted border-orange-600 p-10 h-[200px] font-bold'
      style={{color:color}}>
          <h1>Hello how are you, {name}</h1>
          {children}
      
      </div>
  )
}
