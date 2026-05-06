import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-10 bg-black text-white p-4">
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar