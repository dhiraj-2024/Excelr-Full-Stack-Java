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
        }
    ];

    return (
        <div className='flex justify-between p-4 border-1'>
            <div>
                Logo
            </div>
            <div>
                <ul className='flex justify-center gap-4 '>
                    {
                        NavList.map((item) => (
                            <Link key={item.id} to={item.path} >
                                <li className='flex justify-center align-center gap-2  cursor-pointer'>
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
