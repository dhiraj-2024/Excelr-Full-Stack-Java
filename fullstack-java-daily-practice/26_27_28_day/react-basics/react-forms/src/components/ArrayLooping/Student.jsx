import React from 'react'

export const Student = ({stud}) => {
  return (

          <div>
              <p className='text-red-400'> student Name :{stud.name}</p>
              <p className='text-green-800'> student Marks :{stud.marks}</p>
          </div>

  )
}
