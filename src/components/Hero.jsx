import { useState } from "react";
import { carousel } from "../constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carousel.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="h-[500px] lg:h-[900px] w-full relative group z-0">
        <div style={{ backgroundImage: `url(${carousel[currentIndex].icon})` }} className="w-full h-full rounded2xl bg-center bg-cover duration-500 flex items-center">
          <img src={carousel[currentIndex].icon} alt="hero sections" style={{ visibility: "hidden", width: "100%", height: "100%" }} />
        </div>
        <div className="absoluteProp w-4/5 mx-auto h-fit flex flex-col items-center justify-center py-5 md:py-10 lg:py-20 px-4 gap-5 text-white bg-opacity-60 backdrop-filter backdrop-blur-md">
          <h3 className="text-2xl lg:text-6xl font-Gotham-Bold">{carousel[currentIndex].head}</h3>
          <p className="font-Gotham-Bold text-sm lg:text-2xl flex items-end">{carousel[currentIndex].text}</p>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
      </div>
    </>
  );
};

export default Hero;
