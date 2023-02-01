import React from 'react'
import './educational.css'
import {BsPatchCheckFill} from 'react-icons/bs' 
import {BsCalendarWeek} from 'react-icons/bs'
import {MdGrade} from 'react-icons/md'
import {GiTimeBomb} from 'react-icons/gi'
import {BiLink} from 'react-icons/bi'

const Educational = () => {
  return (
    <section id="educational">
      <h5>My Educational Trajectory</h5>
      <h2>Educational</h2>

      <div className="container educational__container">
        <div className="experience__educational">
          <h3>Educational</h3>

          <div className="educational__content">
            <article className="educational__details">
              <BsPatchCheckFill className='educational__details-icon' />
              <div>
                <h4>Computer Science Bachelor | Stade University of Paraíba</h4>
                <small className="text-light"><BsCalendarWeek/> FEV 2020 - NOV 2023</small><br />
                <small className="text-light"><GiTimeBomb/> 6° Semester of 8</small><br />
                <small className="text-light"><MdGrade/> C.R.A: 9.03</small><br />
              </div>
            </article>
          </div>

          <div className="educational__content">
            <article className="educational__details">
              <BsPatchCheckFill className='educational__details-icon' />
              <div>
                <h4>Gastronomy Technical | CEPED</h4>
                <small className="text-light"><BsCalendarWeek/> ABR 2020 - MAI 2020</small><br />
                <small className="text-light"><MdGrade/> Final Grade: 9.3</small><br />
              </div>
            </article>
          </div>

          <div className="educational__content">
            <article className="educational__details">
              <BsPatchCheckFill className='educational__details-icon' />
              <div>
                <h4>Courses and Certifications</h4>
                <small className="text-light"><BiLink/> <a href="https://docs.google.com/document/d/1t35cETEqr5aKLy1kWIZv3_Ba8Ddrb0sClf08w8mzssk/">Scrum Fundamentals Certfied</a></small><br />
                <small className="text-light"><BiLink/> <a href="https://docs.google.com/document/d/1t35cETEqr5aKLy1kWIZv3_Ba8Ddrb0sClf08w8mzssk/">Basic to Advanced SQL (with MySQL)</a></small><br />
                <small className="text-light"><BiLink/> <a href="https://docs.google.com/document/d/1t35cETEqr5aKLy1kWIZv3_Ba8Ddrb0sClf08w8mzssk/">Advanced Java</a></small><br />
                <small className="text-light"><BiLink/> <a href="https://docs.google.com/document/d/1t35cETEqr5aKLy1kWIZv3_Ba8Ddrb0sClf08w8mzssk/">Spring React Week</a></small><br />
                <small className="text-light"><BiLink/> <a href="https://docs.google.com/document/d/1t35cETEqr5aKLy1kWIZv3_Ba8Ddrb0sClf08w8mzssk/">Git and Github</a></small><br />
                <small className="text-light"><BiLink/> <a href="https://docs.google.com/document/d/1t35cETEqr5aKLy1kWIZv3_Ba8Ddrb0sClf08w8mzssk/">Introduction to HTML5 and CSS3</a></small><br />
              </div>
            </article>
          </div>
          
        </div>
        {/* End of Educational */}

      </div>
    </section>
  )
}

export default Educational