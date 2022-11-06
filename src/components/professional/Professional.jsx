import React from 'react'
import './professional.css'
import {BsPatchCheckFill} from 'react-icons/bs' 
import {BsCalendarWeek} from 'react-icons/bs'
import {MdGrade} from 'react-icons/md'
import {GiTimeBomb} from 'react-icons/gi'
import {BiLink} from 'react-icons/bi'

const Professional = () => {
  return (
    <section id="professional">
      <h5>My Professional Trajectory</h5>
      <h2>Professional and Educational</h2>

      <div className="container professional__container">

        <div className="experience__professional">
          <h3>Professional</h3>

          <div className="professional__content">
            <article className="professional__details">
              <BsPatchCheckFill className='professional__details-icon' />
              <div>
                <h4>Contágil Contabilidade | Backend Developer</h4>
                <small className="text-light"><BsCalendarWeek/> JAN 2022 - OUT 2022</small><br />
                <small className="text-light"><BsPatchCheckFill/> Automated processes with Python and Selenium;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Developed APIs with Spring Boot;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Developed web sistems with Node.js and Bootstrap;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Worked with PostgreSQL and MySQL databases;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Deployed APIs and databases at Heroku;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Used Docker to virtualize APIs;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Was responsible for the internal systems maintenance;</small>
              </div>
            </article>
          </div>

          <div className="professional__content">
            <article className="professional__details">
              <BsPatchCheckFill className='professional__details-icon' />
              <div>
                <h4>Stade University of Paraíba | Java Monitor</h4>
                <small className="text-light"><BsCalendarWeek/> DEZ 2021 - JUL 2022</small><br />
                <small className="text-light"><BsPatchCheckFill/> Assistance to the students of Programming Language II with Java;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Assistance to the teacher in classes and activities administration;</small><br />
              </div>
            </article>
          </div>
          
        </div>
        {/* End of Professional */}

        <div className="experience__professional">
          <h3>Educational</h3>

          <div className="professional__content">
            <article className="professional__details">
              <BsPatchCheckFill className='professional__details-icon' />
              <div>
                <h4>Computer Science Bachelor | Stade University of Paraíba</h4>
                <small className="text-light"><BsCalendarWeek/> FEV 2020 - NOV 2023</small><br />
                <small className="text-light"><GiTimeBomb/> 6° Semester of 8</small><br />
                <small className="text-light"><MdGrade/> C.R.A: 9.03</small><br />
              </div>
            </article>
          </div>

          <div className="professional__content">
            <article className="professional__details">
              <BsPatchCheckFill className='professional__details-icon' />
              <div>
                <h4>Gastronomy Technical | CEPED</h4>
                <small className="text-light"><BsCalendarWeek/> ABR 2020 - MAI 2020</small><br />
                <small className="text-light"><MdGrade/> Final Grade: 9.3</small><br />
              </div>
            </article>
          </div>

          <div className="professional__content">
            <article className="professional__details">
              <BsPatchCheckFill className='professional__details-icon' />
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

export default Professional