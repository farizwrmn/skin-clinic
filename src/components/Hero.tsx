"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface CarouselProps {
  images: string[];
  interval?: number; // Optional interval prop for auto slide
}

const Hero: React.FC<CarouselProps> = ({ images, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect (optional)
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, [images, interval]);

  // Handle manual slide change
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto xl:-mt-20 -mt-10">
      <div className="relative overflow-hidden w-full h-[300px] rounded-2xl">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Buttons (Navigation dots) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional Previous/Next Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      >
        <GrFormPrevious />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default Hero;
