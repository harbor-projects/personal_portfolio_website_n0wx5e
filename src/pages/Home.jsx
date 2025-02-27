import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-2xl mx-auto">
        <img 
          src="/profile-pic.jpg" 
          alt="Developer Profile" 
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold mb-4 text-secondary">
          Jane Doe
        </h1>
        <p className="text-xl mb-6">
          Full Stack Developer | React & Node.js Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-secondary">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-secondary">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-secondary">
            <FaTwitter />
          </a>
        </div>
        <a 
          href="/resume.pdf" 
          download 
          className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Home
