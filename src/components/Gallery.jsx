import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { gallerySlide } from "../constants";
import { FaArrowRight } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 425 },
    items: 1,
    slidesToSlide: 3,
  },
};

const Gallery = () => {
  return (
    <>
      <div className="w-full py-5 lg:mt-2 gallery-bg">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between mx-auto mb-4 md:mb-6">
            <h4 className="font-Gotham-Book text-base md:text-4xl text-[#181818]">
              GALLERY
            </h4>
            <Link
              to="/gallery"
              className="flex items-center justify-between h-10 gap-6 text-[#272fcd] cursor-pointer"
            >
              <p className="font-poppins text-base font-medium">View More</p>
              <div className="animate">
                <FaArrowRight style={{ color: "#0e1487" }} />
              </div>
            </Link>
          </div>
          <div className="relative h-3/5 flex flex-col">
            {window.innerWidth > 767 ? (
              <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass="gallery-custom-dot-list-style"
                style={{ height: "100%", border: "2px solid red" }}
              >
                {gallerySlide.map(({ id, text, icon }) => {
                  return (
                    <div
                      key={id}
                      className="w-full h-full flex flex-col md:flex-row mx-auto items-center gap-4 md:gap-4"
                    >
                      <img
                        src={icon}
                        alt="gallery-image"
                        className="w-full md:w-3/5 rounded-md"
                        loading="lazy"
                      />
                      <div className="w-full md:w-2/5 flex items-center">
                        <p className="text-sm lg:text-3xl">{text}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              <div className="h-[50vh] overflow-y-scroll">
                {gallerySlide.map(({ id, text, icon }) => (
                  <div key={id} className="">
                    <img
                      src={icon}
                      alt="gallery-image"
                      className="rounded-md"
                    />
                    <p className="my-1 text-gray-600 font-roboto font-normal">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
