"use client"

import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";


interface ImageCarouselProps {
    images: any[];
}

export default function CarouselComponent(){

    const images = [
        {
            img: "/carousel-img-2.png",
            name: "Sadegh Aliakbary",
            title: "Software Engineering Instructor and Consultant",
            description:
                "Flickit is an intelligent assistant for technical decision support. I love it because it practically helped me in evaluating different enterprise software systems, its insights made sense to a wide variety of decision makers, and it is open source!",
        },
        {
            img: "/carousel-img-1.png",
            name: "Seyyed Jamaleddin Pishvaei",
            title: "Software Quality Assessor",
            description:
                "Flickit promotes efficient mental and practical disciplines in assessment projects. While speeding up the assessment process, it provides greater satisfaction among our consultees with less effort.",
        },
    ];

    return <ImageCarousel images={images}/>
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const swiperRef = useRef(null)

    const nextPhoto = (index) =>{
        console.log(swiperRef?.current?.swiper)
        if(swiperRef?.current?.swiper)
        if(index == 0){
            swiperRef?.current?.swiper.slideNext()
            setCurrentSlide(0)
        }else {
            swiperRef?.current?.swiper.slidePrev()
            setCurrentSlide(1)
        }
    }

    const mouseEnter = ()=>{
        if(swiperRef?.current?.swiper){
            swiperRef?.current?.swiper.autoplay.stop()
        }
    }

    const mouseLeave = ()=>{
        if(swiperRef?.current?.swiper){
            swiperRef?.current?.swiper?.autoplay.start()
        }
    }

    return (
        <main
            className=" w-full flex bg-no-repeat bg-[url('/carousel-bg.svg')] bg-cover bg-center pt-[2rem] h-[18.3rem] sm:h-[32rem] lg:h-[40.7rem]">
            <div className="flex flex-col justify-center items-center w-full transition-opacity duration-1000 ">
                <section
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    className=" flex max-sm:justify-center max-sm:items-center justify-between md:items-start lg:items-start items-start gap-[23px] w-[16rem]  sm:w-[36rem] lg:w-[47rem] ">
                    <Swiper
                        ref={swiperRef}
                        loop={true}
                        grabCursor={true}
                        autoplay={{
                        delay: 10000,
                        disableOnInteraction: true,
                    }}
                        modules={[Autoplay]} className="mySwiper"
                    >
                        {images.map((item)=>{
                            return(
                                <SwiperSlide>
                                    <div className={"flex items-start  gap-[23px]"}>


                                    <img
                                    src={item.img}
                                    alt={`Slide ${currentSlide + 1}`}
                                    className="transition-opacity duration-1000 hidden sm:flex"
                                />
                                    <div className="flex flex-col gap-4 sm:gap-14">
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <img
                                                    src={item.img}
                                                    alt={`Slide ${currentSlide + 1}`}
                                                    className="transition-opacity duration-1000 sm:hidden w-[3.3rem] h-[3.3rem]"
                                                />
                                                <div>
                                                    <h3 className="title-large sm:text-3xl lg:!headline-large text-OnPrimary">
                                                        {item.name}
                                                    </h3>
                                                    <h2 className="text-xs sm:text-base	lg:text-3xl	font-bold text-PrimaryFixedDim">
                                                        {item.title}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="body-small sm:text-2xl lg:!display-small text-OnPrimary lg:text-InverseOnSurface italic sm:h-[250px]">
                                            {item.description}
                                        </p>
                                        {/* <div className="flex gap-2 items-center"> */}
                                        {/* </div> */}
                                    </div>
                                    </div>
                                    </SwiperSlide
                               >
                            )
                        })}
                    </Swiper>
                </section>
                <section
                    className="flex w-full justify-center items-center max-sm:gap-1 sm:gap-2 gap-4 max-sm:pt-16 sm:pt-19 pb-4">
                    {images.map((image, index) => {
                        return (
                            <img
                                key={index}
                                src={
                                    currentSlide === index
                                        ? "/carousel-step.svg"
                                        : "/carousel-step-selected.svg"
                                }
                                onClick={() => nextPhoto(index)}
                                alt={`Slide ${index + 1}`}
                                className={`max-sm:w-[12px] max-sm:h-[12px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] 2xl:w-[36px] 2xl:h-[36px] cursor-pointer transition-opacity duration-1000 `}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    );
};