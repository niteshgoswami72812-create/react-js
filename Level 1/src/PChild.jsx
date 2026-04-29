

import React from 'react'

const PChild = ({ Mydetails }) => {
  let { img, employee, fullname, age, city, mobile } = Mydetails

  return (
    <>
      <div id="box">
        <div id="innerbox">

          <img src={img} alt="profile" width="80px" />

          <h2>{employee}</h2>

          <p>Full Name : {fullname}</p>
          <p>Age : {age}</p>
          <p>City : {city}</p>
          <p>Mobile : {mobile}</p>

        </div>
      </div>
    </>
  )
}

export default PChild