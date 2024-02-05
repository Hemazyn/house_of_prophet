import { useState } from "react";
import { Link } from "react-router-dom";
import { BsListNested, BsX } from "react-icons/bs";

const Navbar = () => {
     const [nav, setNav] = useState(false);
     return (
          <>
               {/* <div className={`w-full flex justify-between items-center px-[5%] py-2 md:py-3 transition-all text-white font-bold bg-opacity-60 backdrop-filter backdrop-blur-lg ${scrolling ? "bg-transparent text-white bg-opacity-60 backdrop-filter backdrop-blur-2xl border-b" : ""} fixed top-0 z-50`}> */}
               <div className="w-full flex justify-between items-center px-[5%] py-2 md:py-3 text-neutral-900 bg-indigo-200">
                    <div className=" lg:block">
                         <div className="flex items-center gap-x-2">
                              <h4 className="font-Gotham-Bold hover:text-[#272fcd] duration-200 cursor-pointer text-[20px] leading-none">House of <br /> Prophets</h4>
                              {/* <Logo /> */}
                         </div>
                    </div>
                    <ul className="hidden md:flex lg:flex justify-between">
                         <li className="md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#5927cd] hover:underline duration-200">
                              <Link to="/" onClick={() => setNav(!nav)} smooth="true" duration={500}>Home</Link>
                         </li>
                         <li className="md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#272fcd] hover:underline duration-200">
                              <Link to="/about" onClick={() => setNav(!nav)} smooth="true" duration={500}>About Us</Link>
                         </li>
                         <li className="md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#272fcd] hover:underline duration-200">
                              <Link to="/blog" onClick={() => setNav(!nav)} smooth="true" duration={500}>Blog</Link>
                         </li>
                         <li className="md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#272fcd] hover:underline duration-200">
                              <Link to="/gallery" onClick={() => setNav(!nav)} smooth="true" duration={500}>Gallery</Link>
                         </li>
                         <li className="hidden lg:flex md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#272fcd] hover:underline duration-200">
                              <Link to="/contact" onClick={() => setNav(!nav)} smooth="true" duration={500}>Contact Us</Link>
                         </li>
                         <li className="hidden lg:flex md:px-3 lg:px-4 text-sm md:text-base cursor-pointer capitalize font-roboto font-medium hover:text-[#272fcd] hover:underline duration-200">
                              <Link to="/facilitators" onClick={() => setNav(!nav)} smooth="true" duration={500}>Our Facilitator</Link>
                         </li>
                    </ul>
                    <button className="hidden md:block justify-center items-center bg-[#272fcd] rounded-[5px] text-white py-2 px-5 font-roboto">
                         <Link to="/signUp">Become a member</Link>
                    </button>
                    <div onClick={() => setNav(!nav)} className="cursor-pointer z-50 md:hidden">
                         {nav ? <BsX size={25} className="font-bold text-black" style={{ fontWeight: "lighter" }} /> : <BsListNested size={25} style={{ fontWeight: "lighter" }} className="font-thin" />}
                    </div>
                    {/* navbar toggle phone view */}
                    {nav && (
                         <ul className="flex flex-col justify-start items-start absolute top-0 right-0 w-2/4 h-fit py-4 text-neutral-900 font-roboto bg-[#c5cbfd] z-40">
                              <li className="px-4 py-2 capitalize text-sm cursor-pointer">
                                   <Link to="/" onClick={() => setNav(!nav)} smooth="true" duration={500}>Home</Link>
                              </li>
                              <li className="px-4 py-2 capitalize text-sm cursor-pointer">
                                   <Link to="/about" onClick={() => setNav(!nav)} smooth="true" duration={500}>About Us</Link>
                              </li>
                              <li className="px-4 py-2 capitalize text-sm cursor-pointer">
                                   <Link to="/blog" onClick={() => setNav(!nav)} smooth="true" duration={500}>Blog</Link>
                              </li>
                              <li className="px-4 py-2 capitalize text-sm cursor-pointer">
                                   <Link to="gallery" onClick={() => setNav(!nav)} smooth="true" duration={500}>Gallery</Link>
                              </li>
                              <li className="px-4 py-2 capitalize text-sm cursor-pointer">
                                   <Link to="/contact" onClick={() => setNav(!nav)} smooth="true" duration={500}>Contact Us</Link>
                              </li>
                              <li className="px-4 py-2 capitalize text-sm cursor-pointer">
                                   <Link to="/facilitators" onClick={() => setNav(!nav)} smooth="true" duration={500}>Our Facilitator</Link>
                              </li>
                              <button className="my-2 mx-4 justify-center items-center bg-[#272fcd] text-white text-xs p-[10px] h-[40px] rounded-[5px] font-roboto">
                                   <Link to="/signUp">Become a member</Link>
                              </button>
                         </ul>
                    )}
               </div >
          </>
     );
}

export default Navbar;