import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const UserData = () => {

    const [user, setUser] = useState([]);
    const navigates = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, [])

    const url = "http://localhost:3000/users";
    async function getAllUsers() {
        let response = await fetch(url);
        response = await response.json();
        //    console.log(response)
        setUser(response)
    }

    const deleteUser = async (id) => {
        let response = await fetch(url + "/" + id, {
            method:"DELETE"
        })
        response = response.json()
        if (response) {
            alert("user Deleted")
        }
    }
    const editUser = async (id) => {
        navigates("/edit/"+id)
    }
    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                All Users
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {user.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-xl transition duration-300"
                    >

                        {/* Profile Image */}
                        <div className="flex justify-center mb-4">
                            <img
                                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                                alt="user"
                                className="w-20 h-20 rounded-full border-2 border-blue-500"
                            />
                        </div>

                        {/* Name */}
                        <h2 className="text-lg font-semibold text-gray-800 capitalize">
                            {user.name}
                        </h2>

                        {/* Info */}
                        <p className="text-gray-500 text-sm mt-1">
                            Age: {user.age}
                        </p>
                        <p className="text-gray-500 text-sm">
                            📍 {user.city}
                        </p> 

                        {/* Button */}
                        <button
                            onClick={()=>deleteUser(user.id)}
                            className="mt-4 w-full bg-red-400 text-white py-1.5 rounded-lg hover:bg-blue-600 transition">
                            Delete 
                        </button>
                        <button
                            onClick={() => editUser(user.id)}
                            className="mt-4 w-full bg-green-400 text-white py-1.5 rounded-lg hover:bg-blue-600 transition">
                            Edit 
                        </button>
                    </div>
                ))}

            </div>
        </div>
        //   <div>
        //       <h1 className='font-bold text-[30px] text-blue-600'>ALL USERS</h1>
        //       <div className='flex gap-5'>
        //           {
        //               user.map((user) => (
        //                   <div className='border-2 border-red-600 w-40 rounder-50 mt-5 p-4'>
        //                       <div>
        //                           <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_incoming&w=740&q=80" alt="" width="150px" />
        //                       </div>
        //                       <h1 className='capitalize font-bold'>Name :{ user.name}</h1>
        //                       <h1>Age :{ user.age}</h1>
        //                       <h1>City :{ user.city}</h1>
        //                   </div>
        //               ))
        //           }
        //       </div>
        // </div>
    )
}
