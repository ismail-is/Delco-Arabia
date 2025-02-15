'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 100,
    slidesPerView: 5,
    loop: true,
    navigation: {
        nextEl: "#brand-one__swiper-button-next",
        prevEl: "#brand-one__swiper-button-prev"
    },
    autoplay: { delay: 600 },

   breakpoints: {
            0: {
                  spaceBetween: 30,
                  slidesPerView: 2
              },
              375: {
                  spaceBetween: 30,
                  slidesPerView: 2
              },
              575: {
                  spaceBetween: 30,
                  slidesPerView: 2
              },
              767: {
                  spaceBetween: 50,
                  slidesPerView: 3
              },
              991: {
                  spaceBetween: 50,
                  slidesPerView: 4
              },
              1199: {
                  spaceBetween: 100,
                  slidesPerView: 5
              },
              1199: {
                  spaceBetween: 100,
                  slidesPerView: 5
              }
          
    }
}

export default function BrandSlider1() {
    return (
        <>

            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/5.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/6.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/7.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/8.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/9.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/10.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/11.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/12.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/13.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/14.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/15.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/16.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/17.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/18.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/19.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/20.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/21.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/22.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/23.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/24.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/25.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/26.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/27.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/28.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/29.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/30.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/31.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/32.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/33.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/34.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/35.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/36.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/37.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/38.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/39.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/40.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/41.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/42.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/43.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/44.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/45.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/46.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/47.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/48.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="./assets/images/allimgs/clients/49.jpg" alt="" />
                    </SwiperSlide>
                  
                  
                </div>
            </Swiper>
        </>
    )
}
