import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Clock = ({color}) => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    } , [])
    return (
        <div>
            {/* <h2>clour changing clock</h2> */}
            <div
                style={{
                color:color
            }}    className='border-2 w-[100px] font-bold bg-black p-4'>{time}</div>
        </div>
    )
}
