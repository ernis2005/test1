import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import './style.scss'
import { Card } from './Card/Card';
export const OurCoursesCard = () => {
  return (
    <Swiper
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
      slidesPerView={3}
      centeredSlides

    >
      <SwiperSlide
      >
        <Card />
      </SwiperSlide>
      <SwiperSlide
      >
        <Card />
      </SwiperSlide>

      <SwiperSlide
      >
        <Card />
      </SwiperSlide>
    </Swiper>

  )
}
