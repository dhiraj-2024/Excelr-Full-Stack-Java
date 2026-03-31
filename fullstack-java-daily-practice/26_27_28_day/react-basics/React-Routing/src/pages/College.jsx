import React from 'react'
import { Navbar } from '../components/Navbar'
import { Link, Outlet } from 'react-router'
import { Student } from './Student'
import { Department } from './Department'

export const College = () => {
  return (
      <>
          <Navbar />
          <h1 className='font-bold text-[25px] text-center p-10'>College Information Data</h1>
          <div className='flex justify-around p-10 font-bold text-blue-500'>
              <Link to="student">Student</Link>
              <Link to="department" >Department</Link>



          </div>
              <Outlet/>

      </>
  )
}
