import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const AddUser = () => {

    const user = {
        name: "",
        email: "",
        address: "",
    };
    const [users, setUsers] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setUsers({ ...users, [name]: value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user", users)
            .then((response) => {
                toast.success(response.data.message,{position:"top-right"})
            })
            .catch((err) => console.log(err))


    }


    return (
        <div>
            <h1>Add new user</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id='name'
                        placeholder='Enter your name'
                        className='p-2 outline m-2 '
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id='email'
                        placeholder='Enter your email'
                        className='p-2 outline m-2 '
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        id='address'
                        placeholder='Enter your address'
                        className='p-2 outline m-2 '
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
