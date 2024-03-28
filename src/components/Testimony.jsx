import { useState } from "react";
import { testimony } from "../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimony.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimony.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-fit bg-white text-neutral-900">
      <h3 className="text-center text-neutral-900 text-[20px] md:text-2xl lg:text-4xl font-Gotham-Medium py-4 md:py-4 uppercase">
        Testimonials
      </h3>
      <div className="h-fit w-full mx-auto group mb-10 relative">
        <div className="w-full flex flex-row">
          {testimony.map(({ id, head, text, icon, alt }, index) => (
            <div
              key={id}
              className={`flex flex-col md:flex-row w-4/5 mx-auto gap-6 items-center  ${index === currentIndex ? "block" : "hidden"}`}
            >
              <img
                src={icon}
                alt={alt}
                loading="lazy"
                className="w-full md:w-2/5 h-[300px] rounded-[50%] bg-center bg-cover"
              />
              <div className="flex flex-col w-full md:w-1/2 h-fit justify-center gap-y-10 p4">
                <p className="text-neutral-900 text-sm font-normal font-roboto">
                  {head}
                </p>
                <p className="text-end text-indigo-700 text-sm font-roboto font-bold">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-[2%] md:left-[5%] text-2xl rounded-full p-2 text-[#e8c100] cursor-pointer">
          <FaChevronLeft onClick={prevSlide} size={20} />
        </div>
        <div className="absolute top-1/2 right-[2%] md:right-[5%]  text-2xl rounded-full p-2 text-[#e8c100] cursor-pointer">
          <FaChevronRight onClick={nextSlide} size={20} />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
