import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <div className="text-2xl font-bold tracking-wide">Rijoan</div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
        </ul>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">Resume</button>
      </div>
    </nav>
  )
}

export default Navbar