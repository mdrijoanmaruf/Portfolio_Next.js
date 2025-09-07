import React from 'react'
import Link from 'next/link'

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Education</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Building a strong foundation in computer science and engineering</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2 space-y-8">
            <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-semibold mb-2">Bachelor of Science in Computer Science &amp; Engineering</h2>
              <div className="text-sm text-gray-400 mb-4">2023 - 2027</div>
              <div className="mb-2"><strong>American International University - Bangladesh</strong></div>
              <div className="text-gray-300 mb-2">Dhaka, Bangladesh</div>
              <div className="mb-4 text-green-400 font-semibold">Currently Enrolled - 2nd Year</div>
              <p className="text-gray-300">Pursuing comprehensive education in computer science fundamentals, software engineering, and modern development practices.</p>
            </section>

            <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Key Highlights</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Maintaining strong academic performance</li>
                <li>Active participation in coding competitions</li>
                <li>Student of Programming Hero</li>
                <li>Completed multiple web development projects</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
              <p className="text-gray-300 mb-4">Key subjects that have shaped my technical foundation</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <div>Programming With C++</div>
                    <div className="text-green-400 font-semibold">Completed</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <div>OOP With Java</div>
                    <div className="text-green-400 font-semibold">Completed</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <div>Data Structure</div>
                    <div className="text-green-400 font-semibold">Completed</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <div>Algorithm</div>
                    <div className="text-green-400 font-semibold">Completed</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <div>DBMS</div>
                    <div className="text-green-400 font-semibold">Completed</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <div>C#</div>
                    <div className="text-yellow-400 font-semibold">Ongoing</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Academic Skills</h3>
              <p className="text-gray-300 mb-3">Skills developed through my academic journey</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
                <li>Technical Documentation</li>
                <li>Research &amp; Analysis</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-lg font-semibold mb-2">Currently Seeking Opportunities</h3>
              <p className="text-gray-300 mb-4">I'm always looking for internships, projects, and collaborative opportunities to apply my knowledge and grow as a developer.</p>
              <div className="flex justify-center gap-4">
                <Link href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold">Let's Connect</Link>
              </div>
            </section>
          </main>

          <aside className="md:col-span-1 space-y-6">
            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 text-center">
              <h4 className="font-semibold mb-2">Quick Facts</h4>
              <div className="text-gray-300">Student of American International University - Bangladesh</div>
              <div className="mt-4 text-white font-semibold">Currently Enrolled - 2nd Year</div>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h4 className="font-semibold mb-3">Highlights</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Maintaining strong academic performance</li>
                <li>Active participation in coding competitions</li>
                <li>Student of Programming Hero</li>
                <li>Completed multiple web development projects</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 text-center">
              <h4 className="font-semibold mb-2">Status</h4>
              <div className="text-green-400 font-semibold">Currently Seeking Opportunities</div>
              <p className="text-gray-300 mt-2">I'm always looking for internships, projects, and collaborative opportunities to apply my knowledge and grow as a developer.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Education