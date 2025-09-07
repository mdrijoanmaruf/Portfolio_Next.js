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

const fetchProject = async (id: string): Promise<Project | null> => {
  const res = await fetch(`https://portfolio-server-olive-alpha.vercel.app/api/projects/${id}`, { next: { revalidate: 60 } })
  if (!res.ok) return null
  const json = await res.json()
  return json.data || null
}

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const project = await fetchProject(params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Project not found</h2>
          <Link href="/projects" className="mt-4 inline-block text-blue-400">Back to projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <Link href="/projects" className="text-sm text-gray-400 mb-6 inline-block">← Back to projects</Link>

        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-gray-300 mt-4">{project.description}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {project.images && project.images.length > 0 ? (
              project.images.map((src, i) => (
                <div key={i} className="relative h-56 w-full bg-gray-800 rounded overflow-hidden">
                  <Image src={src} alt={`${project.title} ${i + 1}`} fill className="object-cover" unoptimized />
                </div>
              ))
            ) : project.image ? (
              <div className="relative h-64 w-full bg-gray-800 rounded overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-800 rounded">No images</div>
            )}
          </div>

          <aside className="p-4 bg-gray-900/40 rounded-2xl border border-gray-800">
            <h3 className="font-semibold">Project Details</h3>
            <div className="mt-4 text-gray-300">
              <p>{project.description}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium">Tags</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {(project.tags || []).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded">{t}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-center">View Live</a>
              )}
              {project.liveVideoUrl && (
                <a href={project.liveVideoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-center">Watch Video</a>
              )}
              {project.clientSourceCode && (
                <a href={project.clientSourceCode} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-center">Client Code</a>
              )}
              {project.serverSourceCode && (
                <a href={project.serverSourceCode} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-700 rounded text-center">Server Code</a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails