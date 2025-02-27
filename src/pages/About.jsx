import React from 'react'

function About() {
  const skills = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 
    'Python', 'Docker', 'AWS', 'MongoDB'
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Hi, I'm Jane Doe, a passionate software developer with 5+ years of experience 
            in building web applications and solving complex technical challenges.
          </p>
          <p>
            I specialize in full-stack development, with a strong focus on creating 
            efficient, scalable, and user-friendly web solutions.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-secondary text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
