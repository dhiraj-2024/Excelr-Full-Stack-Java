import React from 'react'
import { useParams,Link } from 'react-router'

export const UserDetails = () => {

    const paramsData = useParams()
    console.log(paramsData)
  return (
      <div>
          <h1>user details page</h1>

          <p>user id is : {paramsData.id}</p>
         <Link to={-1}><button>Go back</button></Link>
          
    </div>
  )
}
