import React from 'react'
import { Link } from 'react-router'

export const Users = () => {

    const userList = [
        { id: 1, name: "dhiraj" },
        { id: 2, name: "pramod" },
        { id: 3, name: "suyog" },
        { id: 4, name: "karan" },
        { id: 5, name: "pratik" },
    ]

    return (
        <div>
            {
                userList.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link to={"/users/" + item.id}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </div>
    )
}
