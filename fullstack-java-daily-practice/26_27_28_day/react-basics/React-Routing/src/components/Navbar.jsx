import React from 'react'
import {
    FaHome,
    FaUser,
    FaPhone,
} from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { Link } from 'react-router';

export const Navbar = () => {
    const NavList = [
        {
            id: 1,
            icon: <FaHome />,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            icon: <FaUser />,
            name: "About",
            path: "/about",
        },
        {
            id: 3,
            icon: <FaPhone />,
            name: "Contact",
            path: "/contact",
        },
        {
            id: 4,
            icon: <LuNewspaper />,
            name: "News",
            path: "/news",
        },
        {
            id: 5,
            icon: <LuNewspaper />,
            name: "College",
            path: "/college",
        },
        {
            id: 6,
            icon: <LuNewspaper />,
            name: "Users",
            path: "/users",
        },
        {
            id: 7,
            icon: <LuNewspaper />,
            name: "List",
            path: "/users/list",
        }
    ];

    return (
        <div className='flex justify-between p-4 border'>
            <div>
                Logo
            </div>
            <div>
                <ul className='flex justify-center gap-4 '>
                    {
                        NavList.map((item) => (
                            <Link  to={item.path} >
                                <li key={item.id} className='flex justify-center align-center gap-2  cursor-pointer'>
                                    <span>{item.icon}</span> {item.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
