import React from 'react'
import { HeroCard } from './HeroCard';

export const Hero = () => {

  // passig variable data using props 

  let userName = "dhiraj";
  let userAge = 22;

  // passing object data using the props 

  const user = {
    name: "dhiraj",
    age: 22,
    city: "nashik",
    country: "INDIA",
    salary : 24000000
}

const userObject = [
  { id: 1, name: "Dhiraj", age: 22, city: "Nagpur" },
  { id: 2, name: "Rahul", age: 25, city: "Pune" },
  { id: 3, name: "Amit", age: 24, city: "Mumbai" },
];
  
  function sayHello(name) {
    alert(`hello ${name}`)
  }


  return (
    <div className="w-full h-[400px] border-2 border-pink-600 flex justify-around p-4 ">
      {/* variable passing  */}
      {/* <HeroCard name={userName} age={userAge} /> */}

      {/* ********************************************************* */}
      {/* object passing  */}
      {/* <HeroCard {...user} />
      <HeroCard {...user} /> */}

      {/* ********************************************************* */}

      {/* <HeroCard data={userObject} />
      <div>hello how are you i am childern</div> */}

      {/* ********************************************************* */}
      <HeroCard name={"dhiraj"} task={sayHello} />
    </div>
  );
}

// export default Hero;