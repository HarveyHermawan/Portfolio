import React from 'react'
import './projects.css'
import {Projects} from '../../data/projects'

const projects = () => {
  return (
    <div className='projects'>
        <div className='title rounded-3xl'>
            <div className='title-text'>
                Projects
            </div>
        </div>

        <div className='content'>
            {Projects.map((project) =>(
                <div className='project rounded-3xl' key={project.id}>
                    <div className='project-name'>{project.name}</div>
                    <div className='project-desc'>{project.desc}</div>
                    <a href={project.url} target='_blank' rel='noopener noreferrer' className='project-link'>Project Link</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default projects