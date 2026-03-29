import React from 'react'
import college from '../../api/college.json'
import { CollegeCard } from './Clg-card'
import { Department } from './Department'
import { Student } from './Student'

export const College = () => {
    return (
        <div>
            <h1>Show all college data using the props</h1>
            {
                college.map((clg, index) => (
                    <div
                        className='border-2 border-gray-400 w-[300px] p-4 list-none bg-linear-90 from-purple-200 to-blue-300' >
                        <CollegeCard key={index} props={clg}/>
                        {
                            clg.departments.map((data, name) => (
                                <div>
                                    <Department key={name} data={data} />
                                    {
                                        data.students.map((stud) => (
                                            <div>
                                                <Student key={stud.id} stud={stud} />
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}