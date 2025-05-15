import React from 'react'
import './contacts.css'
import { Contacts } from '../../data/contacts'

const contacts = () => {
  return (
    <div className='contacts'>
        <div className='title rounded-3xl'>
            <div className='title-text'>
                Contacts
            </div>
        </div>
        <div className='contact-grid'>
            {Contacts.map((contact, index) =>(
                <div key={index} className='contact-item'>
                    <img src={contact.image} alt="image" className='contact-image'/>
                    <a href={contact.url} target="_blank" rel="noopener noreferrer" className={`contact-text ${contact.type === "linkedin" ? "cursor-pointer" : "cursor-default"}`}>
                        {contact.text}
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default contacts