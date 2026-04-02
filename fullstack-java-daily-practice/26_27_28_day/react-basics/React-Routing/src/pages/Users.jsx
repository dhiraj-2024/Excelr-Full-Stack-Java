import React from 'react'
import { Link } from 'react-router'
import { Navbar } from '../components/Navbar'

export const Users = () => {

    const userList = [
        { id: 1, name: "dhiraj" },
        { id: 2, name: "pramod" },
        { id: 3, name: "suyog" },
        { id: 4, name: "karan" },
        { id: 5, name: "pratik" },
    ]

    return (
        <>
            <Navbar />
            <div className='p-10'>
                <h1 className='font-bold text-[30px]'>User List page</h1>
                {
                    userList.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={"/users/" + item.id +"/"+ item.name}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </div>
        </>
    )
}
