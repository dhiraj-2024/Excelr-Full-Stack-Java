import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEfeect = () => {

    const [count, setCount] = useState(0)
    const [ reducer, setReducer] = useState(10)

    useEffect(() => {

        hello()
    }, [count,reducer])
    
    const hello = () => {
        console.log("dhiraj")
    }

    const increaseCounter = () => {
        setCount(count + 1)
    }

    const decreaseCounter = () => {
        setReducer(reducer - 1)
    }

    return (
        <div>
            <h1>hello </h1>
            <h2>counter : {count}</h2>
            <h2>reducer : {reducer}</h2>
            <button onClick={increaseCounter} >++ INcrease</button>
            <button onClick={decreaseCounter} >-- DEcrease</button>
        </div>
    )
}
