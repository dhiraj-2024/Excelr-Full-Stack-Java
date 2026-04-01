import React from 'react'
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div
            className='p-10'
            >
                <h1>HOme Page</h1>
                <button
                    className='border-2 p-2 rounded-xl bg-blue-300'
                    onClick={()=>navigate("about")}
                >About</button>
            
            
            </div>
        </>
  )
}
