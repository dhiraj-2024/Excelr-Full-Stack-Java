import React from 'react'
import { User } from './User';

export const Home = () => {

    const person = {
        username: "dhiraj"
    };

    return (
        <>
            <div
                style={{
                    backgroundColor: "pink",
                    width: "100%",
                    padding: "20px"
                }}
            >
                <h2>Welcome to my React practice application</h2>
            </div>

            <User user={person} />
        </>
    )
}