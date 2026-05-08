import React from 'react'
import './tailwind.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import image from "./assets/vite.svg"

let Tailwind = () => {

  let show = () => {
    alert("hello")
  }

  return (
    <>
      <Navbar />

      
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button
          onClick={show}
          className="bg-red-500 border-2 border-black p-2 rounded text-white"
        >
          CLICK-ME
        </button>
      </div>

      
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default Tailwind