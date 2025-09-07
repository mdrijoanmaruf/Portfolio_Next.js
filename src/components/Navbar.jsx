"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold tracking-wide">Rijoan</div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8 text-lg">
              <li><Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link></li>
              <li><Link href="/education" className="hover:text-blue-400 transition duration-300">Education</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link></li>
            </ul>
            <Link href="/resume.pdf" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300 hover:scale-105">Resume</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md hover:bg-white/5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} px-4 pb-4` }>
        <ul className="space-y-3">
          <li><Link href="/" className="block py-2 px-3 rounded hover:bg-white/5">Home</Link></li>
          <li><Link href="/about" className="block py-2 px-3 rounded hover:bg-white/5">About</Link></li>
          <li><Link href="/contact" className="block py-2 px-3 rounded hover:bg-white/5">Contact</Link></li>
          <li><Link href="/projects" className="block py-2 px-3 rounded hover:bg-white/5">Projects</Link></li>
          <li><Link href="/resume.pdf" className="block py-2 px-3 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">Resume</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar