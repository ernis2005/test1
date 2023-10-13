import React from 'react'
import './page.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

let Svg =()=> {
    return<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M22.5 10.25H14.4375L12 2.75L9.5625 10.25H1.5L8.0625 14.75L5.53125 22.25L12 17.5625L18.4688 22.25L15.9375 14.75L22.5 10.25Z" fill="#ECCD2B" stroke="#ECCD2B" stroke-width="3" stroke-linejoin="round"/>
  </svg>
}
export const CardReviews = () => { 
    const [swiper, setSwiper] = React.useState<any>();

    let name = 'CardReviews'
    return (
        <div className={`${name}`}>
            <div className='buttons'>
                <button onClick={() => swiper?.slidePrev()}><BiChevronLeft/></button>
                <button onClick={() => swiper?.slideNext()}><BiChevronRight/></button>
            </div>
             <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        onSwiper={(s:any) => {
            setSwiper(s);
          }}
        breakpoints={{
            320:{
                slidesPerView: 1,
            },
            478:{
                slidesPerView: 1.3,
            },
            862:{
              slidesPerView: 2,
            },
           
    
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className={`${name}Card`}>
                <div className={`${name}Reviews`}>
                    <p>4.9</p>
                    <Svg/>
                    <Svg/>
                    <Svg/>
                    <Svg/>
                    <Svg/>
                    
                </div>
               
                <div className={`${name}Info`}>
                    <p>
                        Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed ridiculus iaculis eget egestas blandit euismod. Ligula senectus egestas cras risus sodales commodo. Enim nec neque sodales quis sit massa posuere. Id eget ultrices tempus sit id donec feugiat. Congue aliquet tristique egestas dictum tincidunt ac. Odio varius sit dignissim justo. Dui sapien aliquet aliquam quis et tellus velit bibendum. Quis pretium vitae suspendisse at.
                        Iaculis eu convallis egestas a mattis viverra. Id leo sollicitudin matti
                    </p>
                </div>
                <div className={`${name}User`}>
                    <div>
                        <img src="/images/Reviews/Ellipse 361.png" alt="" />
                    </div>
                <span>
                    <p>Андрей Соломонов</p>
                    <samp>Developer</samp>
                </span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${name}Card`}>
                <div className={`${name}Reviews`}>
                    <p>4.9</p>
                    <Svg/>
                    <Svg/>
                    <Svg/>
                    <Svg/>
                    <Svg/>
                    
                </div>
               
                <div className={`${name}Info`}>
                    <p>
                        Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed ridiculus iaculis eget egestas blandit euismod. Ligula senectus egestas cras risus sodales commodo. Enim nec neque sodales quis sit massa posuere. Id eget ultrices tempus sit id donec feugiat. Congue aliquet tristique egestas dictum tincidunt ac. Odio varius sit dignissim justo. Dui sapien aliquet aliquam quis et tellus velit bibendum. Quis pretium vitae suspendisse at.
                        Iaculis eu convallis egestas a mattis viverra. Id leo sollicitudin matti
                    </p>
                </div>
            
                <div className={`${name}User`}>
                    <div>
                        <img src="/images/Reviews/Ellipse 361.png" alt="" />
                    </div>
                <span>
                    <p>Андрей Соломонов</p>
                    <samp>Developer</samp>
                </span>
                
                </div>
            </div>
        </SwiperSlide>
        
   
      </Swiper>
           
        </div>
    )
}
