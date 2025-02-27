import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary">
          Developer Portfolio
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center hover:text-secondary">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/about" className="flex items-center hover:text-secondary">
            <FaUser className="mr-2" /> About
          </Link>
          <Link to="/projects" className="flex items-center hover:text-secondary">
            <FaCode className="mr-2" /> Projects
          </Link>
          <Link to="/contact" className="flex items-center hover:text-secondary">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
