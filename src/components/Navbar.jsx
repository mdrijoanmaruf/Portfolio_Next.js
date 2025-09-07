import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <div className="text-2xl font-bold tracking-wide">Rijoan</div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link></li>
        </ul>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">Resume</button>
      </div>
    </nav>
  )
}

export default Navbar