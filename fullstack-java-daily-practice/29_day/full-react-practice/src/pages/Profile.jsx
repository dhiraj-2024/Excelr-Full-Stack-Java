import React from 'react'

export const Profile = ({ user }) => {
    const { username } = user;
  return (
      <div>
          <h2>hello {username ?? "Geuste"} your city is </h2>
    </div>
  )
}
