import React from 'react'
import './tailwind.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const Tailwind = () => {
  const show = () => {
    alert("hello")
  }

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <button
          onClick={show}
          className="bg-amber-400 border-2 border-black p-2 rounded"
        >
          DAWAO MUJHE
        </button>

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