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
            className="max-sm:px-4 max-sm:py-4 w-full flex sm:p-8 md:p-16 lg:p-32 xl:p-48 2xl:p-64 bg-no-repeat bg-[url('/carousel-bg.svg')] bg-clip-padding bg-cover min-h-[550px] max-sm:min-h-[400px] max-sm:gap-0 max-sm:justify-between">
            <div className="flex flex-col justify-center items-center w-full transition-opacity duration-1000">
                <section
                    className="flex w-full 2xl:w-full  max-sm:flex-col max-sm:justify-start max-sm:items-center justify-between md:items-center lg:items-start max-sm:gap-4 sm:gap-4  md:gap-4 lg:gap-6 2xl:gap-24 xl:gap-16 max-sm:min-h-[320px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[450px] 2xl:min-h-[500px] items-center">
                    <img
                        src={images[currentSlide].img}
                        alt={`Slide ${currentSlide + 1}`}
                        className="transition-opacity duration-1000 max-sm:w-[140px] sm:w-[160px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px]"
                    />
                    <div className="flex flex-col gap-2  lg:mt-12 xl:mt-24">
                        <p className=" max-sm:text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl  2xl:text-4xl font-medium text-blueDeep italic">
                            {images[currentSlide].description}
                        </p>
                        {/* <div className="flex gap-2 items-center"> */}
                        <h3 className="max-sm:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl  font-bold text-[#1cc2c4]">
                            {images[currentSlide].name}
                        </h3>
                        <h2 className="max-sm:text-xs sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl font-bold text-[#9DA7B3]">
                            {images[currentSlide].title}
                        </h2>
                        {/* </div> */}
                    </div>
                </section>
                <section
                    className="flex w-full justify-center items-center max-sm:gap-1 sm:gap-2 gap-4 max-sm:mt-4 mt-16">
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