import { useState } from "react";
import { Link } from "react-router-dom";
import { BsListNested, BsX } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeNavOnLargeScreen = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
    }
  };
  const navItems = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "About Us",
      path: "/about"
    },
    {
      label: "Blog",
      path: "/blog"
    },
    {
      label: "Gallery",
      path: "/gallery"
    },
    {
      label: "Contact Us",
      path: "/contact"
    },
    {
      label: "Our Facilitator",
      path: "/facilitators"
    }
  ];
  return (
    <>
      <div className="w-full flex justify-between items-center px-[5%] py-2 md:py-3 text-neutral-900 bg-indigo-200">
        <div className=" lg:block">
          <div className="flex items-center gap-x-2">
            <h4 className="font-Gotham-Bold hover:text-[#272fcd] duration-200 cursor-pointer text-[20px] leading-none animate__animated animate__slideInLeft animate__slow">
              House of <br /> Prophets
            </h4>
          </div>
        </div>
        <ul className="hidden md:flex lg:flex justify-between animate__animated animate__slideInRight animate__slower">
          {navItems.map((item, index) => (
            <li key={index} className="md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#5927cd] hover:underline duration-200">
              <Link to={item.path} onClick={() => { setNav(!nav); closeNavOnLargeScreen() }} smooth="true" duration={500}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer z-50 md:hidden">
          {nav ? (
            <BsX size={25} className="font-bold text-black" style={{ fontWeight: "lighter" }} />
          ) : (
            <BsListNested size={25} style={{ fontWeight: "lighter" }} className="font-thin" />)}
        </div>
        {/* navbar toggle phone view */}
        {nav && (
          <ul className="flex flex-col justify-start items-start absolute top-0 right-0 w-2/4 h-fit py-4 text-neutral-900 font-roboto bg-[#c5cbfd] z-40  animate__animated animate__slideInRight animate__slower">
            {navItems.map((item, index) => (
              <li key={index} className="px-4 py-2 capitalize text-sm cursor-pointer">
                <Link to={item.path} onClick={() => setNav(!nav)} smooth="true" duration={500}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Navbar;