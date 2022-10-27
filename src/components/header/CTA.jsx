import React from 'react'
import CV from '../../assets/pdf/cv.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className="btn" download>Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact me</a>
    </div>
  )
}

export default CTA