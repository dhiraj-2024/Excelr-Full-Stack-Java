import React, { useState } from 'react'

export const DisplyForm = () => {

    const [val,setVal]= useState("")
  return (
      <div className='border-2 border-green-500 p-10 font-bold'> 
          <h1>Handle Form Input </h1>
          <form action="">
              <input
                  type="text"
                  placeholder='Enter You Name'
                  className='outline p-2'
                  onChange={(event)=>setVal(event.target.value)}
              />
              <p>value : {val} </p>
              <button className='border-2 rounded-[10px] w-50 p-2 bg-red-400 cursor-pointer ' >Clear</button>
          </form>
          

    </div>
  )
}
