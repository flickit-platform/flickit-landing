import {bottomMainCard} from "@/utils/db";
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { FreeMode, Pagination } from 'swiper/modules';

export default function BottomMain(){


    return(
            <section className="h-[13.3rem] sm:h-[25rem] lg:h-[41rem] flex justify-center mx-auto w-full lg:px-16 lg:py-32 overflow-auto ">
            <div className="h-full w-full flex gap-6 scrollbar-hide overflow-x-auto overflow-y-hidden items-center px-3 sm:px-0 mx-auto max-w-[1440px]">
              <Swiper
                  slidesPerView={2}
                  spaceBetween={1}
                  breakpoints={{
                      1306:{
                          width:1300,
                          slidesPerView: 3
                      }
                 }}
                  pagination={{
                      clickable: true,
                  }}
                  slideToClickedSlide={true}
                  freeMode={true}
                  initialSlide={1}
                  className="mySwiper"
                  modules={[FreeMode, Pagination]}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
              >
                  {bottomMainCard.map((items,index) => {
                      return (
                          <SwiperSlide
                          >
                              <Slide {...items} key={index} index={index}/>
                          </SwiperSlide>)
                  })}
              </Swiper>
            </div>
        </section>
    )
}

const Slide = (items: any) => {
 const {color,text,title,movement,index} = items
  //todo
    return (
        <div style={{boxShadow: `inset 1px 1px 14px rgba(255, 255, 255, 12%)`}} className={`flex min-w-[9.37rem] gap-4 lg:gap-[79px] flex-col items-center justify-start w-[9.37rem] max-w-[9.37rem] h-[9.37rem] sm:w-[17rem] sm:max-w-[17rem] sm:h-[17rem] lg:w-[25rem] lg:h-[25rem] lg:min-w-[25rem] lg:min-h-[25rem] rounded-[0.75rem] sm:rounded-[2rem] px-2.5 sm:px-8 py-8 lg:py-[5.62rem] bg-gradient-to-b from-[#102D51] from-0% to-100% to-surfaceMidNightBlack `}>
        <h3 style={{color,filter: `drop-shadow(0px 0px 30px ${color})`}} className={"label-small sm:text-[1.2rem] sm:leading-5 lg:!headline-small text-center lg:w-[15.75rem] h-[2.5rem] sm:h-[5.12rem]"}>{title}</h3>
        <h3 className="text-[0.375rem] sm:text-[0.6rem] lg:text-[1rem] text-InverseOnSurface lg:w-[19rem] text-center">{text}</h3>
        </div>
    )
}