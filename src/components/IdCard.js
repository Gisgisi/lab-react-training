import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  const formattedBirth = birth.toString().split(" ").slice(0, 4).join(" ");
  const heightString = height.toString()
  const formattedHeight = heightString.slice(0, 1) + "." + heightString.slice(1) + "m";

  return (
    <div>
      <h2>IdCards</h2>
      <img src={picture}/>
      <p>lastname:{lastName}</p>
      <p>firstname:{firstName}</p>
      <p>gender:{gender}</p>
      <p>heigh: {formattedHeight}</p>
      <p>birthdate:{formattedBirth}</p>
    </div>
  )
}

export default IdCard