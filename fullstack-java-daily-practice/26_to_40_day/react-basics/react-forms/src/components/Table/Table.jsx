import React from 'react'

export const Table = () => {

    const userData = [
        {
            id: 1,
            name: "Dhiraj Barwal",
            age: 22,
            email: "dhiraj@gmail.com",
            city: "Nashik",
            role: "Frontend Developer",
            skills: ["React", "JavaScript", "Tailwind"],
        },
        {
            id: 2,
            name: "Rahul Sharma",
            age: 25,
            email: "rahul@gmail.com",
            city: "Pune",
            role: "Backend Developer",
            skills: ["Node.js", "Express", "MongoDB"],
        },
        {
            id: 3,
            name: "Amit Patel",
            age: 24,
            email: "amit@gmail.com",
            city: "Mumbai",
            role: "Full Stack Developer",
            skills: ["React", "Node.js", "MySQL"],
        },
        {
            id: 4,
            name: "Sneha Verma",
            age: 23,
            email: "sneha@gmail.com",
            city: "Delhi",
            role: "UI/UX Designer",
            skills: ["Figma", "Adobe XD", "CSS"],
        },
        {
            id: 5,
            name: "Karan Singh",
            age: 26,
            email: "karan@gmail.com",
            city: "Bangalore",
            role: "DevOps Engineer",
            skills: ["Docker", "AWS", "Kubernetes"],
        },
    ];
    return (
        <div>
            <h1>Table Data</h1>
            <table className='border-2'>
                <thead>
                    <tr >
                        <th className='border-2'>ID</th>
                        <th className='border-2'>Name</th>
                        <th className='border-2'>Age</th>
                        <th className='border-2'>Email</th>
                        <th className='border-2'>City</th>
                        <th className='border-2'>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return (
                                <tr className='border-2' key={user.id} user={user}>
                                    <td className='border-2 p-2' >{user.id}</td>
                                    <td className='border-2 p-2' >{user.name}</td>
                                    <td className='border-2 p-2' >{user.age}</td>
                                    <td className='border-2 p-2' >{user.email}</td>
                                    <td className='border-2 p-2' >{user.city}</td>
                                    <td className='border-2 p-2' >{user.role}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
