import React from 'react'
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router'

export const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <div
        className='p-10'
      >
        <h1>About Page</h1>
        <button
          className='border-2 p-2 rounded-xl bg-blue-300'
          onClick={() => navigate(-1)}
        >go back</button>


      </div></div>
  )
}
