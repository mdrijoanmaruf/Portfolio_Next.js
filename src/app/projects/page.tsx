import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  _id: string
  title: string
  description: string
  image?: string
  images?: string[]
  clientSourceCode?: string | null
  serverSourceCode?: string | null
  liveLink?: string | null
  liveVideoUrl?: string | null
  tags?: string[]
}

const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch('https://portfolio-server-olive-alpha.vercel.app/api/projects', { next: { revalidate: 60 } })
  if (!res.ok) return []
  const json = await res.json()
  return json.data || []
}

const Projects = async () => {
  const projects = await fetchProjects()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A curated selection of recent work and case studies. Click a project to view live demo, video, or source code.</p>
        </header>

        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length === 0 && (
            <div className="col-span-full text-center text-gray-400">No projects found.</div>
          )}

          {projects.map((p) => (
            <article key={p._id} className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <Link href={`/projects/${p._id}`} className="block relative h-48 w-full bg-gray-800">
                {p.image ? (
                  <Image src={p.image} alt={p.title} fill className="object-cover" unoptimized />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
                )}
              </Link>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-2 line-clamp-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {(p.tags || []).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-300">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.liveLink && (
                    <a href={p.liveLink} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">Live</a>
                  )}

                  {p.liveVideoUrl && (
                    <a href={p.liveVideoUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border border-gray-700 rounded-full">Video</a>
                  )}

                  {p.clientSourceCode && (
                    <a href={p.clientSourceCode} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border border-gray-700 rounded-full">Client Code</a>
                  )}

                  {p.serverSourceCode && (
                    <a href={p.serverSourceCode} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border border-gray-700 rounded-full">Server Code</a>
                  )}

                  <Link href={`/projects/${p._id}`} className="text-sm px-3 py-2 bg-gray-800/60 border border-gray-700 rounded-full ml-auto">Details</Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Projects