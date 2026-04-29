// Props.jsx

import React from 'react'
import PChild from './PChild'
import image1 from './assets/employee1.png'
import image2 from './assets/employee2.png'
import image3 from './assets/employee3.png'
import image4 from './assets/employee4.png'
import image5 from './assets/employee5.png'
import image6 from './assets/employee6.png'
import './PC.css'

const Props = () => {
  let Data = [
    {
      img: image1,
      employee: "Employee 1",
      fullname: "Nitesh Goswami",
      age: 25,
      city: "Delhi",
      mobile: "123456789"
    },
    {
      img: image2,
      employee: "Employee 2",
      fullname: "Abhishek Kumar",
      age: 30,
      city: "Ayodhya",
      mobile: "234567891"
    },
    {
      img: image3,
      employee: "Employee 3",
      fullname: "Rahul Tiwari",
      age: 28,
      city: "Bhopal",
      mobile: "345678912"
    },
     {
      img: image4,
      employee: "Employee 4",
      fullname: "Rohit Kumar",
      age: 28,
      city: "Bhopal",
      mobile: "456789123"
    },
     {
      img: image5,
      employee: "Employee 5",
      fullname: "Sourabh Tiwari",
      age: 28, 
      city: "Bhopal",
      mobile: "567891234"
    },
    {
      img: image6,
      employee: "Employee 6",
      fullname: "Sidhart malhotra",
      age: 28,
      city: "Bhopal",
      mobile: "678912345"
    }
  ]

  return (
    <>
      {/* <h1>Props</h1> */}

      <div id="main">
        {Data.map((e) => (
          <PChild key={e.mobile} Mydetails={e} />
        ))}
      </div>
    </>
  )
}

export default Props