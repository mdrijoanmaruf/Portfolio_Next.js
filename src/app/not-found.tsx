'use client'

import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-400/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400/30 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-10 h-10 bg-pink-400/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        {/* 404 Number with Animation */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}>
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            The page you're looking for seems to have wandered off into the digital void.
            Don't worry, it happens to the best of us!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link href="/" className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Go Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Fun Message */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-gray-500 text-sm">
            While you're here, why not check out my <Link href="#projects" className="text-blue-400 hover:text-blue-300 underline">projects</Link>?
          </p>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default NotFound