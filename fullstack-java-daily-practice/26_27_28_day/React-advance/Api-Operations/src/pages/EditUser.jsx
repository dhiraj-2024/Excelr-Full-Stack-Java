import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export const EditUser = () => {

    const { id } = useParams()

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: ""
    });

    useEffect(() => {
        getUserData();
    }, [])

    const url = "http://localhost:3000/users/" + id;
    // console.log(url)

    async function getUserData() {

        let response = await fetch(url);
        response = await response.json()
        setFormData(response)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const updateUser = async (event) => {
        event.preventDefault();
        let response = await fetch(url, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(formData)
        })
        let data = await response.json()
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px]">

                {/* Title */}
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Edit User Details
                </h1>

                <form onSubmit={updateUser} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Age
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.age}
                            type="number"
                            name="age"
                            placeholder="Enter your age"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            City
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.city}
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300 shadow-md"
                    >
                        update user
                    </button>
                </form>
            </div>
        </div>
    )
}
