import React from 'react'
import { useState } from 'react'

export const UserAdd = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city:""
    });

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const  handelSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = "http://localhost:3000/users";
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json()

            if (response) {
                alert("successfully User Added")
            }
        
            console.log("Response :",data)
            console.log(`Form data :`, formData)

        } catch (error) {
            console.log("Error :",error)
        }
        

    }


  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px]">

              {/* Title */}
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Add New User
              </h1>

              <form onSubmit={handelSubmit} className="space-y-4">

                  {/* Name */}
                  <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                          Name
                      </label>
                      <input
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
                      Submit
                  </button>
              </form>
          </div>
      </div>
  )
}
