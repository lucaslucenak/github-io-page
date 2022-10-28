import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio img 1" />
          </div>
          <h3>Portfolio item title</h3>
          <a href="https://github.com" target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live demo</a>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio img 2" />
          </div>
          <h3>Portfolio item title</h3>
          <a href="https://github.com" target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live demo</a>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio img 3" />
          </div>
          <h3>Portfolio item title</h3>
          <a href="https://github.com" target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live demo</a>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio img 4" />
          </div>
          <h3>Portfolio item title</h3>
          <a href="https://github.com" target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live demo</a>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio img 5" />
          </div>
          <h3>Portfolio item title</h3>
          <a href="https://github.com" target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live demo</a>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio img 6" />
          </div>
          <h3>Portfolio item title</h3>
          <a href="https://github.com" target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio