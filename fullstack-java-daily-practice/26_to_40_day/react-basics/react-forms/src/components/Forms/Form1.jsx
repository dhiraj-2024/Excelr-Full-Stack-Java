import React from 'react'
import { useState } from 'react'

export const Form1 = () => {

    const [name, setName] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
    }

    return (
        <div className='p-5'>
            <h2>Basic Form</h2>
            <form onSubmit={handleSubmit} >

                <input type="text"
                    placeholder='Enter Name'
                    className='outline rounder-2 px-2'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <br />
                <br />
                <button
                    type='submit'
                    className='border-2 rounded-lg px-2 cursor-pointer'

                >Submit</button>
            </form>
        </div>
    )
}
