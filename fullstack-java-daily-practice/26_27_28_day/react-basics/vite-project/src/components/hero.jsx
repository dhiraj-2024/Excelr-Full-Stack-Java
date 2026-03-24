import React from 'react'

export const Hero = () => {

  let name = "dhiraj";
  let age = 22;

  // conditional rendering 


  return (
    <section className="w-full h-[400px] border-2 border-red-600">
      <div className="px-10 mt-4">
        <h1>hello welcome {name} </h1>
        <p>
          hey {name} your age is {age}
        </p>
      </div>
      <div>{age > 18 ? "you can vote" : "you can not vote"}</div>
    </section>
  );
}

// export default Hero;