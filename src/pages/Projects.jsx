import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'Productivity app with real-time collaboration features',
    technologies: ['React', 'Firebase', 'TypeScript'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Weather Forecast App',
    description: 'Real-time weather tracking with geolocation',
    technologies: ['React', 'OpenWeatherAPI'],
    githubLink: '#',
    liveLink: '#'
  }
]

function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="section-title">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-secondary">
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-gray-200 text-primary px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-secondary"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-secondary"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
