import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio/projeto13.png'
import IMG2 from '../../assets/img/portfolio/projeto8.png'
import IMG3 from '../../assets/img/portfolio/projeto11.png'
import IMG4 from '../../assets/img/portfolio/projeto6.png'
import IMG5 from '../../assets/img/portfolio/projeto12.png'
import IMG6 from '../../assets/img/portfolio/projeto7.png'
import IMG7 from '../../assets/img/portfolio/projeto14.png'
import IMG8 from '../../assets/img/portfolio/projeto15.png'

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Rest Spring API',
      github: 'https://github.com/lucaslucenak/rest-api-spring',
      demo: 'https://github.com/'
    },
    {
      id: 2,
      image: IMG7,
      title: 'Spring Mail Microservice',
      github: 'https://github.com/lucaslucenak/tecline-os-system-mail',
      demo: 'https://github.com/'
    },
    {
      id: 3,
      image: IMG5,
      title: 'School Management API',
      github: 'https://github.com/lucaslucenak/school-management',
      demo: 'https://github.com/'
    },
    {
      id: 4,
      image: IMG8,
      title: 'Simple React-Spring CRUD',
      github: 'https://github.com/lucaslucenak/simple-react-spring-crud',
      demo: 'https://github.com/'
    },
    {
      id: 5,
      image: IMG3,
      title: 'Where Have I Stopped',
      github: 'https://github.com/lucaslucenak/where-have-i-stopped',
      demo: 'https://github.com/'
    },
    {
      id: 6,
      image: IMG4,
      title: 'System Digital Certificate Validity',
      github: 'https://github.com/lucaslucenak/check-validity-of-digital-certificates',
      demo: 'https://github.com/'
    },
    {
      id: 7,
      image: IMG6,
      title: 'University Projects',
      github: 'https://github.com/lucaslucenak/cc-UEPB',
      demo: 'https://github.com/'
    }
]

const dataWithDemo = [
  {
    id: 1,
    image: IMG2,
    title: 'Dashboard with Spring and React',
    github: 'https://github.com/lucaslucenak/projeto-sds3',
    demo: 'https://dsvendas-lucaslucena.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          dataWithDemo.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
                </div>
              </article>
            )
          })
        }
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank'>Github</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a> */}
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio