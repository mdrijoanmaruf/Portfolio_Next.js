import React from 'react'
import Link from 'next/link'
import { FaMapMarkerAlt, FaCode, FaLightbulb, FaRocket, FaUsers, FaSearch, FaDownload, FaEye, FaEnvelope } from 'react-icons/fa'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.25),transparent_50%)] opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Hello! I'm <span className="text-blue-400">Rijoan</span>
                </h2>
                <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">Full Stack Developer</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
      I'm a passionate Full Stack Developer with over 1 year of experience creating digital solutions that make a difference. My journey in tech started with curiosity and has evolved into a deep love for building applications that solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
      When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in continuous learning and the power of collaboration to build amazing things.
                </p>
              </div>

              {/* Location & Experience */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-3 mb-2">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    <span className="text-gray-400">Based in</span>
                  </div>
                  <p className="text-white font-semibold text-lg">Bangladesh</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-3 mb-2">
                    <FaCode className="text-purple-400 text-xl" />
                    <span className="text-gray-400">Experience</span>
                  </div>
                  <p className="text-white font-semibold text-lg">1+ Years</p>
                </div>
              </div>
            </div>

            {/* Passion Highlight */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
              <div className="text-center">
                <FaRocket className="text-6xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">My Passion</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Problem Solving drives everything I do. I love turning complex challenges into elegant, user-friendly solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">1+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Me Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              What Drives Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            The values and principles that guide my work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              [
                { icon: FaCode, title: "Clean Code Enthusiast", desc: "I believe in writing maintainable, scalable, and efficient code that stands the test of time." },
                { icon: FaLightbulb, title: "Problem Solver", desc: "I love tackling complex challenges and finding innovative solutions to real-world problems." },
                { icon: FaRocket, title: "Fast Learner", desc: "Always eager to learn new technologies and stay updated with the latest industry trends." },
                { icon: FaUsers, title: "Team Player", desc: "I thrive in collaborative environments and believe great products are built by great teams." },
                { icon: FaSearch, title: "Detail Oriented", desc: "I pay attention to the small details that make a big difference in user experience." },
                { icon: FaRocket, title: "Passionate Creator", desc: "Every project is an opportunity to create something meaningful and impactful." }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <item.icon className="text-3xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Technologies I use to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Frontend</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'].map((skill, index) => (
                  <div key={index} className="bg-gray-700/50 px-4 py-2 rounded-lg text-center hover:bg-blue-600/20 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Backend</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Node.js', 'Express', 'Python', 'MongoDB', 'Firebase'].map((skill, index) => (
                  <div key={index} className="bg-gray-700/50 px-4 py-2 rounded-lg text-center hover:bg-purple-600/20 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Let's make it happen!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <FaDownload />
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <Link href="#projects" className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <FaEye />
              <span>View Projects</span>
            </Link>

            <Link href="#contact" className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <FaEnvelope />
              <span>Contact Me</span>
            </Link>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 inline-block">
            <span className="text-green-400 font-semibold flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for freelance projects and full-time opportunities</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About