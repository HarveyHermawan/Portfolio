import React from 'react'
import './skills.css'
import {Skills} from '../../data/skills'

const skills = () => {
  return (
    <div className='skills'>
      <div className='title rounded-3xl'>
        <div className='title-text'>
          Skills
        </div>
      </div>
      <div className='content'>
        {Skills.map((skill) =>(
          <div className='item' key={skill.id}>
            <div>
              <img src={skill.image} alt="" />
            </div>
            <div className='skill-name'>{skill.name}</div>  
          </div>
        ))}
      </div>
    </div>
  )
}

export default skills