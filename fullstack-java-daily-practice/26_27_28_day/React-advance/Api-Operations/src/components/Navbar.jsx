import React from 'react'
import {  NavLink } from 'react-router-dom'

import {
    FaHome,
    FaUser,
    FaPhone,
    FaBox
} from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";

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
            icon: <FaBox />,
            name: "Posts",
            path: "posts",
        },
        {
            id: 3,
            icon: <FaPhone />,
            name: "D-Data",
            path: "dummy-data",
        },
        {
            id: 4,
            icon: <FaUser />,
            name: "Users",
            path: "users",
        },
     {
         id: 5,
         icon: <FaUser />,
         name: "Add User",
         path: "add",
     },
    ];

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">

            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                MyApp
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-6 font-medium">
                {NavList.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.id}
                        className={({ isActive }) =>
                            `relative px-2 py-1 transition duration-300 ${isActive
                                ? "text-blue-600"
                                : "text-gray-600 hover:text-blue-500"
                            }`
                        }
                    >
                        <span>{item.name}</span>

                        {/* Active underline */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                ))}
            </div>

        </div>
    //   <div className='flex px-6 py-4 justify-between border-2 bg-yellow-100'>
    //       <div>
    //           <h1>LOGO</h1>
    //       </div>
    //       <div className='flex justify-center gap-5 font-semibold '>
    //           {
    //               NavList.map((item) => (
    //                   <NavLink to={item.path} key={item.id} >
    //                       <li className='list-none '>
    //                           {/* <span>{item.icon}</span> */}
    //                           <span >{item.name}</span>
    //                       </li>
    //                   </NavLink>
    //               ))
    //           }
    //       </div>
    // </div>
  )
}
