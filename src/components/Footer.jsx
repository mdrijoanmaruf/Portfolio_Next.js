import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rijoan
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate full-stack developer creating innovative web solutions and user experiences.
              Let's build something amazing together.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>rijoanmaruf@example.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Follow Me</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/md.rijoanmaruf" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rijoanmaruf" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/mdrijoanmaruf" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mdrijoanmaruf/" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/mdrijoanmaruf/" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                <SiLeetcode className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Rijoan Maruf. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer