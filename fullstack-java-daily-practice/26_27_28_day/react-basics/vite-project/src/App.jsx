import React from "react"
import Nav from "./components/nav"
import { Hero } from "./components/hero";
import {AllCards} from "./components/allCards"
function App() {

  const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

const fruitlist = ['apple', 'banana', 'cherry'];

  return (
    <>
      <Nav />
      <Hero />
      <AllCards/>

      
      {/* <ul>
        {users.map(user => 
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        )}
      </ul>
      <ul>
        {
          fruitlist.map(fruit =>
            <li key={fruit}> Name : {fruit}</li>
          )
        }
      </ul> */}

    </>
  )
}

export default App
