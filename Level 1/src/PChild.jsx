import React from 'react'

const PChild = ({ Mydetails }) => {

    console.log(Mydetails);
    

  let { name, age, city, ram } = Mydetails
  let { fullname, mobile } = ram

  return (
    <>
      <h1>PChild</h1>

      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>

      <h2>Ram Details</h2>

      <p>Full Name : {fullname}</p>
      <p>Age : {ram.age}</p>
      <p>City : {ram.city}</p>
      <p>Mobile : {mobile}</p>
    </>
  )
}

export default PChild