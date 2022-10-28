import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/img/avatar1.jpg'
import AVTR2 from '../../assets/img/avatar2.jpg'
import AVTR3 from '../../assets/img/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Wendel Lemos',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    avatar: AVTR2,
    name: 'Nilman Ds',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    avatar: AVTR3,
    name: 'Daniel Xavier',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from partners</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={540}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials