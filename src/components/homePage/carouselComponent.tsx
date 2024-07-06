"use client"

import React, {useEffect, useState} from "react";

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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
        }, 8000); // Change slides every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main
            className=" w-full flex bg-no-repeat bg-[url('/carousel-bg.svg')] bg-cover pt-[2rem] ">
            <div className="flex flex-col justify-center items-center w-full transition-opacity duration-1000">
                <section
                    className=" flex max-sm:justify-center max-sm:items-center justify-between md:items-start lg:items-start items-start gap-[23px] w-[16rem]  sm:w-[30rem] lg:w-[47rem] ">
                    <img
                        src={images[currentSlide].img}
                        alt={`Slide ${currentSlide + 1}`}
                        className="transition-opacity duration-1000 hidden sm:flex"
                    />
                    <div className="flex flex-col gap-4 sm:gap-14">
                        <div>
                            <div className="flex items-center gap-1">
                                <img
                                    src={images[currentSlide].img}
                                    alt={`Slide ${currentSlide + 1}`}
                                    className="transition-opacity duration-1000 sm:hidden w-[3.3rem] h-[3.3rem]"
                                />
                                <div>
                                    <h3 className="text-xl sm:text-3xl lg:text-6xl font-bold text-[#EDFCFC]">
                                        {images[currentSlide].name}
                                    </h3>
                                    <h2 className="text-xs sm:text-base	lg:text-3xl	font-bold text-[#9CCAFF]">
                                        {images[currentSlide].title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs sm:text-2xl font-medium text-[#EDF4FC] italic">
                            {images[currentSlide].description}
                        </p>
                        {/* <div className="flex gap-2 items-center"> */}
                        {/* </div> */}
                    </div>
                </section>
                <section
                    className="flex w-full justify-center items-center max-sm:gap-1 sm:gap-2 gap-4 max-sm:pt-16 sm:pt-24">
                    {images.map((image, index) => {
                        return (
                            <img
                                key={index}
                                src={
                                    currentSlide === index
                                        ? "/carousel-step-selected.svg"
                                        : "/carousel-step.svg"
                                }
                                onClick={() => setCurrentSlide(index)}
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