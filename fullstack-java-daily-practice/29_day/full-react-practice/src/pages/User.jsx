import React, { useState } from 'react'
import { Profile } from './Profile';

export const User = ({ user }) => {

    const { username } = user || {};

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);



    return (
        <div>

            <h1>Hello {username ?? "Guest"}</h1>

            <h5>Count: {count}</h5>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>

            <h2>{toggle ? "ON" : "OFF"}</h2>

            <button onClick={() => setToggle(true)}>
                ON
            </button>

            <button onClick={() => setToggle(false)}>
                OFF
            </button>

            <Profile user={ user} />

        </div>
    )
}