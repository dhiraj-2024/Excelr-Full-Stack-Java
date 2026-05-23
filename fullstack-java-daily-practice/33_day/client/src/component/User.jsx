import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router";



export const User = () => {

    // STATE
    const [users, setUsers] = useState([]);

    // FETCH USERS
    useEffect(() => {

        const fetchUsers = async () => {
            try {

                const response = await axios.get(
                    "http://localhost:8000/api/users"
                );

                setUsers(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();

    }, []);

    return (
        <>
            <div>
                <div >
                    <h1>All Users</h1>
                    <Link to="/adduser"> <button className="p-2 border-2 bg-red-400 border-red-500 rounded-lg">Add User</button></Link>
                </div>

                <table border="2" cellPadding="10" className="border-2 mt-10 ml-10">
                    <thead>
                        <tr>
                            <th className="p-4 border-1" >Sr.No</th>
                            <th className="p-4 border-1" >Name</th>
                            <th className="p-4 border-1" >Email</th>
                            <th className="p-4 border-1" >Address</th>
                            <th className="p-4 border-1" >Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user._id}>
                                        <td className="p-4 border-1">{index + 1}</td>
                                        <td className="p-4 border-1">{user.name}</td>
                                        <td className="p-4 border-1">{user.email}</td>
                                        <td className="p-4 border-1">{user.address}</td>
                                        <td className="flex justify-center p-4 gap-4  border-1 ">
                                            <button><FaRegEdit /></button>
                                            <button><RiDeleteBin5Fill /></button>
                                        </td>
                                    </tr>
                                );
                            })
                        } 
                    </tbody>

                </table>
            </div>
        </>
    );
};