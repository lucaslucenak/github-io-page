import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lucas-lucena-6588271a3/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/lucaslucenak" target="_blank"><FaGithub/></a>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5583986907270" target="_blank"><FaWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials