

import React from 'react'
import PChild from './PChild'

const Props = () => {

   let Mydetails = {
  name: "Nitesh",
  age: 25,
  city: "Delhi",

  ram: {
    fullname: "Ram Kumar",
    age: 30,
    city: "Ayodhya",
    mobile: "9876543210"
  }
}
    



    
  return (
    <>

    <h1>Props</h1>

    <PChild Mydetails={Mydetails}/>
   

    </>
  )
}

export default Props