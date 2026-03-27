import React from "react";
import { useState } from "react";

export const Form3Validation = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({});

    const formValidation = () => {
        let newErrors = {};

        if (!formData.email.includes("@")) {
            newErrors.email = "invalid email";
        }
        if (formData.password.length < 6) {
            newErrors.password = "password length should be more than 6"
        }
        return newErrors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        setError((prev) => ({
            ...prev,
            [name]: ""
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = formValidation();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        }
        else {
            console.log("Form Submitted", formData);
        }
    }

    return (
        <div className="p-5">
            <h2>Validation Form</h2>
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
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                />
                {error.email && <p>{error.email}</p>}
                <br />
                <br />
                <label htmlFor="password">Password :</label>
                <input
                    className="outline px-2 ml-4"
                    placeholder="Enter Password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                />
                {error.password && <p> {error.password}</p>}
                <br />
                <br />
                <button
                    type="submit"
                    className="border-2 rounded-lg px-2 bg-orange-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
