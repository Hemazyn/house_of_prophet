import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Slide, Gallery } from "../components";

const Blog = () => {
  return (
    <div className="w-full border-b-2">
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="flex items-center justify-between my-5">
          <h4 className="font-Gotham-Book text-base lg:text-4xl text-[#181818]">BLOG POST </h4>
          <Link to="/blog" className="flex items-center justify-between h-10 gap-6 text-[#272fcd] cursor-pointer">
            <p className="font-roboto text-base font-medium">View More</p>
            <FaArrowRight style={{ color: "#0e1487" }} />
          </Link>
        </div>
        <Slide />
      </div>
      <Gallery />
    </div>
  );
};

export default Blog;
