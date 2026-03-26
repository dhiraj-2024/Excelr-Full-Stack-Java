import React, { useState } from 'react'

export const Toggle = () => {

    const [display , setDisplay] = useState(false)

  return (
    <div className="h-[250px] border-2 border-purple-700 p-8 font-bold flex justify-around">
      <div>
        <h1>Toggle Component </h1>
              <button className="border-2 rounded-lg bg-red-300 p-2  cursor-pointer"
              onClick={()=> setDisplay(!display)}>
          Show Data
        </button>
        {display ? <p className="text-orange-500">Dhiraj Rajput</p> : null}
      </div>
    </div>
  );
}
