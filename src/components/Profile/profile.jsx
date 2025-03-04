import React from 'react'
import './profile.css'

const profile = () => {
  return (
    <div className='profile'>
  
      <div className='aboutMe'>
        <div className='title rounded-3xl'>
          <div className='title-text'>
            About Me
          </div>
        </div>
        <div className='desc'>
          <p>Hi, I’m Harvey, an undergraduate student at Bina Nusantara University pursuing a degree in Computer Science with a passion for web development and a love for learning new things. I’m driven by the goal of creating clean, efficient, and user-friendly digital experiences. I have experience with HTML, CSS, and JavaScript.</p>
        </div>
      </div>

      <div className='picture'>
        <img className='profilePicture' src='/pp.png'/>
      </div>
      
    </div>
  )
}

export default profile