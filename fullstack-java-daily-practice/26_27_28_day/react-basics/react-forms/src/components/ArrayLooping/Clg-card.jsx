import React from "react"
import { Student } from "./Student"
import { Department } from "./Department"
export const CollegeCard = ({props}) => {
    console.log(props)
    return (
        <div>
            <li>
                <h2>{props.collegeName}</h2>
            </li>
        </div>
    )
}