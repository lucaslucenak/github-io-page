import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio/projeto9.png'
import IMG2 from '../../assets/img/portfolio/projeto8.png'
import IMG3 from '../../assets/img/portfolio/projeto11.png'
import IMG4 from '../../assets/img/portfolio/projeto6.png'
import IMG5 from '../../assets/img/portfolio/projeto12.png'
import IMG6 from '../../assets/img/portfolio/projeto7.png'


const data = [
    {
      id: 1,
      image: IMG1,
      title: 'GitHub',
      github: 'https://github.com/lucaslucenak?tab=repositories',
      demo: 'https://github.com/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Dashboard with Spring and React',
      github: 'https://github.com/lucaslucenak/projeto-sds3',
      demo: 'https://github.com/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Where Have I Stoped',
      github: 'https://github.com/lucaslucenak/where-have-i-stopped',
      demo: 'https://github.com/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'System Digital Certificate Validity',
      github: 'https://github.com/lucaslucenak/check-validity-of-digital-certificates',
      demo: 'https://github.com/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'School Management API',
      github: 'https://github.com/lucaslucenak/school-management',
      demo: 'https://github.com/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'University Projects',
      github: 'https://github.com/lucaslucenak/cc-UEPB',
      demo: 'https://github.com/'
    }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
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