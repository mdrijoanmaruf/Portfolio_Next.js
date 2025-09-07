import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Have a project in mind or just want to say hello? I'd love to hear from you!</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 space-y-6">
            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h3 className="font-semibold mb-2">Let's Connect</h3>
              <p className="text-gray-300">I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and development. Feel free to reach out!</p>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h4 className="font-semibold">Email</h4>
              <div className="text-gray-300">rijoanmaruf@gmail.com</div>
              <h4 className="font-semibold mt-4">Phone</h4>
              <div className="text-gray-300">+880 1813-606468</div>
              <h4 className="font-semibold mt-4">Location</h4>
              <div className="text-gray-300">Dhaka, Bangladesh</div>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 text-center">
              <h4 className="font-semibold mb-2">Follow Me</h4>
              <p className="text-gray-300">Available for Work</p>
              <p className="text-gray-400 mt-2">Currently open to internships, freelance projects, and full-time opportunities.</p>
            </div>
          </aside>

          <main className="md:col-span-2">
            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
              <form className="grid grid-cols-1 gap-4">
                <label className="text-sm text-gray-300">Full Name</label>
                <input className="bg-gray-900 p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />

                <label className="text-sm text-gray-300">Email Address</label>
                <input className="bg-gray-900 p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@example.com" />

                <label className="text-sm text-gray-300">Message</label>
                <textarea rows={6} className="bg-gray-900 p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project or just say hello..." />

                <div className="pt-2">
                  <button type="button" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold">Send Message</button>
                </div>
              </form>

              <p className="text-gray-400 text-sm mt-4">I'll get back to you within 24 hours. Looking forward to connecting!</p>
            </div>

            <div className="mt-8 bg-gray-800/30 p-6 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-2xl font-semibold mb-3">Ready to Start a Project?</h3>
              <p className="text-gray-300 mb-4">Whether you have a clear vision or just an idea, I'm here to help bring your project to life. Let's discuss how we can work together to create something amazing.</p>
              <div className="flex justify-center gap-4">
                <a href="mailto:rijoanmaruf@gmail.com" className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold">Email Me Directly</a>
                <Link href="#" className="px-6 py-3 border border-gray-700 rounded-full text-gray-300">Schedule a Call</Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Contact