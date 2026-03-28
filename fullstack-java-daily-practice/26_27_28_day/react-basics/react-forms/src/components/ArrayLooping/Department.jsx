import React from 'react'

export const Department = ({data}) => {
  return (
      <div>
          <div>
              <h3 className='font-semibold py-2'>Department Name :{data.name}</h3>
              <h6 className='font-[10px] text-blue-800 p-2'> Department HOD :{data.hod}</h6>
          </div>
    </div>
  )
}
