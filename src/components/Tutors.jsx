import { tutors } from "../constants";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tutors = () => {
  return (
    <div className="bg-[#F5D119] py-4">
      <div className="bg-white bg-opacity-20 mx-auto">
        <div className="w-[90%] mx-auto pb-4">
          <h3 className="text-center text-neutral-900 text-[20px] md:text-2xl lg:text-4xl font-Gotham-Bold py-2 md:py-4">
            Meet our Facilitators
          </h3>
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4">
            {tutors.map(({ id, head, text, alt, icon }) => {
              return (
                <div
                  key={id}
                  className="flex flex-col h-fit p-3 rounded-lg bg-[#f5d117]"
                >
                  <img
                    src={icon}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-[400px] mb-4 rounded-md bg-center bg-cover"
                  />
                  <h5 className="text-justify text-indigo-700 text-xl font-Gotham-Book">
                    {head}
                  </h5>
                  <p className="text-justify text-gray-800 text-sm font-normal font-roboto">
                    {text}
                  </p>
                  <Link
                    to="https://devemma.netlify.app"
                    target="_blank"
                    className="flex flex-row items-center gap-x-1 mt-4"
                  >
                    <p className="text-sm font-Gotham-Book text-[#0e1487]">
                      View More
                    </p>
                    <div className="animate">
                      <FaArrowRight size={12} style={{ color: "#0e1487" }} />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
