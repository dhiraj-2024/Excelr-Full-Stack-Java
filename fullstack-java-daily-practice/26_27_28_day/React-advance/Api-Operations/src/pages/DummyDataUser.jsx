import React from 'react'
import { useState, useEffect } from 'react';

export const DummyDataUser = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        getUserData();
    }, [])

    async function getUserData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json()
        // console.log(response.users)
        setUserData(response.users)

    }
    return (
        //   <div>
        //       <h1>User Details</h1>
        //       <div>
        //           {
        //               userData.map((user) => (
        //                   <ul key={user.id} >
        //                       <li>First Name :{user.firstName}</li>
        //                       <li>Last Name :{user.lastName}</li>
        //                       <li>Age :{user.age}</li>
        //                       <li>City : {user.address.city}</li>
        //                       <li>State : {user.address.state}</li>
        //                       <li>Department : {user.company.department}</li>

        //                   </ul>
        //               ))
        //           }
        //       </div>
        //   </div>
      
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">User Details</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {userData.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        {/* Avatar */}
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
                                {user.firstName.charAt(0)}
                            </div>
                        </div>

                        {/* Name */}
                        <h2 className="text-lg font-semibold text-center text-gray-800">
                            {user.firstName} {user.lastName}
                        </h2>

                        {/* Age */}
                        <p className="text-center text-gray-500 text-sm mb-4">
                            Age: {user.age}
                        </p>

                        {/* Info */}
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>
                                📍 <span className="font-medium">City:</span> {user.address.city}
                            </p>
                            <p>
                                🏙 <span className="font-medium">State:</span> {user.address.state}
                            </p>
                            <p>
                                💼 <span className="font-medium">Department:</span>{" "}
                                {user.company.department}
                            </p>
                        </div>

                        {/* Button */}
                        <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
