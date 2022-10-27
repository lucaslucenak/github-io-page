import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <container className="header__container">
        <h5>Hey, I'm</h5>
        <h1>Lucas Lucena</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </container>
    </header>
  )
}

export default Header