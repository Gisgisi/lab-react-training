import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div>
      <img src={picture}/>
      <p>lastname:{lastName}</p>
      <p>firstname:{firstName}</p>
      <p>gender:{gender}</p>
      <p>height</p>
      <p>birthdate:none</p>
    </div>
  )
}

export default IdCard