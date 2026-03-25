import React from "react";

// using variable 

// export const HeroCard = ({ name, age }) => {
//     console.log(data)
//   return (
//       <div className='border-2 border-blue-800 w-full p-4   '>
//           <h1>hero card</h1>
//           <p>{name}</p>
//           <p>{age}</p>

//     </div>
//   )
// }


// using object 

// export const HeroCard = ({ name, age, city, salary, country }) => {
//   // const { name, age, city, salary, country } = data;

//   return (
//     <div className="border-2 border-blue-800 w-full p-4   ">
//       <h1>hero card</h1>
//       <p>Name : {name}</p>
//       <p>salary : ${salary}</p>
//       <p>age : {age}</p>
//       <p>city : {city} </p>
//       <p>country : {country} </p>
//     </div>
//   );
// };




// using array of object 

// export const HeroCard = ({ data,children }) => {

//   return (
//     <div className="border-2 border-blue-800 w-full p-4   ">
//       <p>{data[0].name}</p>
//       <p>{data[0].age}</p>
//       <p>{data[0].city}</p>
//           <hr />
//           <hr />
//       <p>{data[1].name}</p>
//       <p>{data[1].age}</p>
//       <p>{data[1].city}</p>

//       {/*  using loops */}
//       {/* {
//               data.map((users) => {
//                   return (
//                       <li key={users.id}>
//                       <p>{users.name}</p>
//                           <p>{users.age}</p>
//                           <p>{users.city}</p>
//                   </li>
//                   )
//               })
//         } */}
//     </div>
//   );
// };



export const HeroCard = ({ name, task }) => {
    return (
        <div className='border-2 border-blue-800 w-full p-4   '>
            <h1>hero card</h1>

            <button onClick={() => task(name)} className="border-2 rounded-lg p-2 bg-secondary">click me</button>


        </div>
    )
}