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
      <h2>Professional</h2>

      <div className="container professional__container">

        <div className="experience__professional">
          <h3>Professional</h3>

          <div className="professional__content">
            <article className="professional__details">
              <BsPatchCheckFill className='professional__details-icon' />
              <div>
                <h4>Mereo Tech | Backend Developer</h4>
                <small className="text-light"><BsCalendarWeek/> DEZ 2022 - ACTUAL</small><br />
                <small className="text-light"><BsPatchCheckFill/> Developed functionalites with PHP;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Provided maintenance support to Laravel and Phalcon Applications;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Worked with MySQL databases;</small><br />
                <small className="text-light"><BsPatchCheckFill/> Participated the SCRUM agile rites with my teammates;</small><br />
              </div>
            </article>
          </div>

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
      </div>
    </section>
  )
}

export default Professional