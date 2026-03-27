import React from 'react'
import { useState } from 'react';

export const Form2Multiform = () => {

    const [formData, setFormData] = useState({ name: "", email: "",gender:"",state:"",skills:[]});

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
      <div className="p-5">
        <h2>MultiField Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            className="outline px-2 ml-4"
            placeholder="Enter Name"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email :</label>
          <input
            className="outline px-2 ml-4"
            placeholder="Enter Email"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <br />
          <br />
          <p className="font-bold">Select Gender</p>
          <label htmlFor="male">Male</label>
          <input
            className="ml-2"
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="female" className="ml-10">
            Female
          </label>
          <input
            className="ml-2"
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={handleChange}
          />
          <br />
          <br />

          <p className="font-bold">Select State</p>
          <select name="state" id="state" onChange={handleChange}>
            <option value="maharashtra">Maharashtra</option>
            <option value="goa">Goa</option>
            <option value="delhi">Delhi</option>
            <option value="panjab">Panjab</option>
            <option value="jammu">Jammu</option>
          </select>

          <br />
          <br />
          {/* <p className="font-bold">Select Skills</p>

          <label htmlFor="js">Javascript</label>
          <input
            type="checkbox"
            name="skills"
            id="js"
            value="javascript"
            className="ml-2"
            onChange={handleChange}
          />
          <label htmlFor="react">React</label>
          <input
            type="checkbox"
            name="skills"
            id="react"
            value="react"
            onChange={handleChange}
            className="ml-2"
          />
          <label htmlFor="nextjs">Next js</label>
          <input
            type="checkbox"
            name="skills"
            id="nextjs"
            value="next js"
            className="ml-2"
            onChange={handleChange}
          />
          <label htmlFor="angular">Angular</label>
          <input
            type="checkbox"
            name="skills"
            id="angular"
            value="angular"
            className="ml-2"
            onChange={handleChange}
          /> */}

          <br />
          <br />
          <button
            type="submit"
            className="border-2 rounded-lg px-2 bg-orange-200"
          >
            Submit
          </button>
        </form>
      </div>
    );
}
