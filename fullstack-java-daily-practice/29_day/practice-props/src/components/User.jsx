import { useEffect, useRef, useState } from "react";

function User({ name, city, greet }) {
    
    const [count, setCount] = useState(0);
    const inputRef = useRef();

    const increment = () => {
        setCount(count + 1);
    }
    // const decrement = () => {
    //     setCount(count - 1);
    // }

    const url = "https://dummyjson.com/products";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
        .then(data => console.log(data))
    })

    useEffect(() => {
        
        console.log("HEllo form the useefect")
        // const timer = setInterval(() => {
        //     console.log("running")
        // }, 1000)
        

        // return ()=>{
        //     clearInterval(timer);
        // }
    },[count])

    return (
        <>
            {/* <h1>This is user page</h1>
            <h2>hello {name ?? "Guest"}</h2>
            <h3>your city is {city ?? "mumbai"}</h3> */}
            <p>{greet}</p>
            <h4>Count : {count}</h4>
            <button onClick={increment} >Increase ++</button>
            {/* <button onClick={()=> setCount(count +1 )} >Increase ++</button> */}
            <button onClick={() => setCount(count - 1)}>Decrease --</button>
            <br />
            <br />

            
            <input
                type="text"
                placeholder="search product"
                ref={inputRef}

            />
            <butto onClick={()=>inputRef.current.focus()} >Focus</butto>
        </>
    )
}
export default User;