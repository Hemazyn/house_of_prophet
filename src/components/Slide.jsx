import Carousel from "react-multi-carousel";
import { Link } from "react-scroll";
import "react-multi-carousel/lib/styles.css";
import { sliderImageUrl } from "../constants";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 425 },
    items: 2,
    slidesToSlide: 1,
  },
};

const Slide = () => {
  return (
    <>
      {/* for phone view only */}
      <div className="w-full flex flex-col md:hidden">
        {sliderImageUrl.slice(0, 2).map(({ id, text, src, link }) => {
          return (
            <div
              key={id}
              className="h-fit flex flex-col items-center gap-5 p-2 m-1 rounded-lg bg-gray-200"
            >
              <div className="w-full flex flex-col justify-start items-start relative">
                <img
                  className="w-full w[300px] md:w[220px] lg:w[300px] h-[328px] rounded-md shadow"
                  src={src}
                  alt={text}
                  loading="lazy"
                />
                <div className="absolute bottom-0 w-full h-10 lg:h-12 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-bl-md rounded-br-md shadow justify-center items-center gap-2.5 flex">
                  <div className="text-justify text-white md:text-base text-xl font-normal font-roboto">
                    {text}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3.5">
                <div className="w-full flex items-center justify-between">
                  <div className="text-neutral-950 text-lg font-semibold font-roboto">
                    Lorem ipsum dolor{" "}
                  </div>
                  <div className="text-neutral-600 text-base font-normal font-roboto">
                    12-8-23
                  </div>
                </div>
                <div className="text-neutral-900 text-sm font-normal font-roboto">
                  Lorem ipsum dolor sit amet consectetur. Nulla aliquet
                  pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla
                  aliquet pellentesque.Lorem ipsum dolor sit amet consectetur.
                  Nulla aliquet pellentesque. Lorem ipsum dolor sit amet
                  consectetur. Nulla aliquet pellentesque.
                </div>
              </div>
              <Link
                to={link}
                className="w-full px-9 py-2.5 rounded-md border-2 border-indigo-700 justify-center items-center gap-2 inline-flex bg-white"
              >
                <h4 className="cursor-pointer text-indigo-700 text-base font-medium font-roboto">
                  Read More
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
      {/* from tab view */}
      <div className="w-full flex-col hidden md:flex">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          className="blog-slide"
        >
          {sliderImageUrl.map(({ id, text, src, link }) => {
            return (
              <div
                key={id}
                className="h-fit flex flex-col p-1 md:p-3 lg:p-5 m-1 md:m-2 gap-5 rounded-lg bg-gray-200"
              >
                <div className="flex flex-col justify-start items-start relative">
                  <img
                    className="w-full h-[350px] rounded-md shadow bg-center bg-cover"
                    src={src}
                    alt={text}
                  />
                  <div className="absolute bottom-0 w-full h-10 lg:h-12 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-bl-lg shadow justify-center items-center gap-2.5 flex">
                    <div className="text-justify text-white md:text-base text-xl font-normal font-roboto">
                      {text}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3.5">
                  <div className="w-full flex items-center justify-between">
                    <div className="text-neutral-950 font-bold font-roboto">
                      Lorem ipsum dolor{" "}
                    </div>
                    <div className="text-neutral-600 text-xs lg:text-base font-normal font-roboto">
                      12-8-23
                    </div>
                  </div>
                  <div className="text-neutral-900 text-sm font-normal font-roboto">
                    Lorem ipsum dolor sit amet consectetur. Nulla aliquet
                    pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla
                    aliquet pellentesque.Lorem ipsum dolor sit amet consectetur.
                    Nulla aliquet pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Nulla aliquet pellentesque.
                  </div>
                </div>
                <Link
                  to={link}
                  className="w-full px-9 py-2.5 rounded-md border-2 border-indigo-700 justify-center items-center gap-2 inline-flex bg-white"
                >
                  <h4 className="cursor-pointer text-indigo-700 text-base font-medium font-roboto">
                    Read More
                  </h4>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Slide;
