import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import './style.scss'
import './Card/style.scss'
import { Card } from './Card/Card';
export const OurCoursesCard = () => {
  return (
    <>  <div className='OurCoursesCard1'>
 
        <Card image={'/images/js.png'}/>
      
        <Card image={'/images/Group.png'} />

      
        <Card image={'/images/skill-icons_javascript.png'}/>
    </div>
    <Swiper
    className='OurCoursesCard2'
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      onSwiper={(swiper: any) => console.log(swiper)}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false
        
      }}
      
      breakpoints={{
        320:{
          slidesPerView: 1,
        },
        553:{
          slidesPerView: 1.2,
        },
        670:{
          slidesPerView: 1.5,
        },
        756:{
          slidesPerView: 2,
        },
        1108: {
          slidesPerView: 3,
        },

      }}
      initialSlide={1}
      slidesPerView={3}
      centeredSlides

    >
      <SwiperSlide
      >
        <Card image={'/images/js.png'}/>
      </SwiperSlide>
      <SwiperSlide
      >
        <Card image={'/images/Group.png'} />
      </SwiperSlide>

      <SwiperSlide
      >
        <Card image={'/images/skill-icons_javascript.png'}/>
      </SwiperSlide>
    </Swiper>

    </>
  
  )
}
