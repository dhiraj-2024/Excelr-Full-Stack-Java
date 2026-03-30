import React from "react";
import {
    FaHome,
    FaUser,
    FaPhone,
} from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";



function Nav() {

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
            icon: <LuNewspaper/>,
            name: "News",
            path: "/news",
        },
    ];

    return (
        <>
            <header className=" p-4  border-gray-600 border-2 font-bold flex justify-between items-center w-full">
                <div>Logo</div>
                <div>
                    <ul className="flex gap-4 px-4 cursor-pointer">
                        {NavList.map((menu) => (
                            <li key={menu.id} className="flex gap-2 items-center">{ menu.icon}{menu.name}</li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Nav;