// components/ImageCarousel.tsx
import React, { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-sm:px-4 max-sm:py-4 w-full flex px-32  py-32 bg-no-repeat bg-[url('/carousel-bg.svg')] bg-clip-padding bg-cover">
      <div className="flex flex-col justify-center items-center w-full transition-opacity duration-1000">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="transition-opacity duration-1000"
        />

        <div className="flex w-full justify-center items-center max-sm:gap-1 gap-4 max-sm:mt-4 mt-16">
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
                className={`max-sm:w-[12px] max-sm:h-[12px] cursor-pointer transition-opacity duration-1000 `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
