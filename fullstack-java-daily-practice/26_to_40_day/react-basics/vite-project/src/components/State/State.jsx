import React, { useState } from 'react'

export const State = () => {

    let [count, setCount] = useState(0);
    let [fruit, setFruit] = useState("Pineapple 🍍")

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    };

    return (
        <div className="h-[250px] border-2 border-purple-700 p-8 font-bold flex justify-around">
            <div>
                <h1>Change Fruit Name Using State</h1>
                <p>Fruit :{fruit}</p>
                <button
                    onClick={() => setFruit("Banana🍌")}
                    className="border-2 rounded-lg bg-green-200 p-2 cursor-pointer"
                >
                    Change Fruit Name
                </button>
            </div>
            <div>
                <h1>Change Counter value Using React State</h1>
                <p>Counter : {count}</p>
                <button
                    onClick={handleIncrease}
                    className="border-2 rounded-lg bg-pink-300 p-2  cursor-pointer"
                >
                    Increase ++{" "}
                </button>
                <br />
                <br />
                <button
                    onClick={handleDecrease}
                    className="border-2 rounded-lg bg-yellow-200 p-2  cursor-pointer"
                >
                    Decrease --
                </button>
            </div>
        </div>
    );
}
