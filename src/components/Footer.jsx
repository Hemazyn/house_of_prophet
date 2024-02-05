import { Link } from 'react-router-dom';
import { SocialLink } from '../components';
import { BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";

const Footer = () => {


     return (
          <div className="h-full bg-[#181818] text-white">
               <div className=" w-[90%] mx-auto pt-4 pb-4 md:py-[30px] lg:py-[40px] gap-y-4 md:gap-y-0">
                    {/* ANCHOR  */}
                    <div className="flex flex-col lg:flex-row mb-4 md:mb-0 md:gap-x-[100px]">
                         <div className="w-full lg:w-2/5 gap-[10px] mb-5 lg:mb-0">
                              <div className="flex flex-col gap-y-4">
                                   <h3 className="text-2xl font-Gotham-Bold leading-none">House of <br /> Prophets</h3>
                                   <p className="font-roboto text-sm font-normal leading-normal text-start">House of Prophets is a platform God himself has established to raise a complete Army who is not only spiritually fit but also ready in other areas where Christ must be Lord.</p>
                              </div>
                              <SocialLink />
                         </div>
                         <div className="w-fit grid grid-cols-2 md:grid-cols-4 justify-between gap-y-3 md:gap-y-0">
                              <div className="flex flex-col gap-y-[16px] lg:gap-y-[35px]">
                                   <h3 className="font-Gotham-Book text-[18px] lg:text-3xl leading-none">Home</h3>
                                   <div className="flex flex-col gap-y-1 lg:gap-y-[30px]">
                                        <Link to="/gallery"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                        <Link to="/blog"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Blog Post</p></Link>
                                        <Link to="/about"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">About Us</p></Link>
                                        <Link><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                   </div>
                              </div>
                              <div className="flex flex-col gap-y-[16px] lg:gap-y-[35px]">
                                   <h3 className="font-Gotham-Book text-[18px] lg:text-3xl leading-none">About Us</h3>
                                   <div className="flex flex-col gap-y-1 lg:gap-y-[30px]">
                                        <Link to="/about"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Vision</p></Link>
                                        <Link to="/about"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Aim</p></Link>
                                        <Link to="/about"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Mission</p></Link>
                                        <Link to="/about"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Our Facilitators</p></Link>
                                        <Link to="/about"><p className="text-sm font-roboto font-normal text-justify text-white cursor-pointer hover:text-[#212fcd]">Testimonials</p></Link>
                                   </div>
                              </div>
                              <div className="flex flex-col gap-y-[16px] lg:gap-y-[35px]">
                                   <h3 className="font-Gotham-Book text-[18px] lg:text-3xl leading-none">Ministry</h3>
                                   <div className="flex flex-col gap-y-1 lg:gap-y-[30px]">
                                        <Link to="/gallery"><p className="text-sm font-roboto font-normal text-justify text-gray-300 cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                        <Link to="/gallery"><p className="text-sm font-roboto font-normal text-justify text-gray-300 cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                        <Link to="/gallery"><p className="text-sm font-roboto font-normal text-justify text-gray-300 cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                        <Link to="/gallery"><p className="text-sm font-roboto font-normal text-justify text-gray-300 cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                        <Link to="/gallery"><p className="text-sm font-roboto font-normal text-justify text-gray-300 cursor-pointer hover:text-[#212fcd]">Gallery</p></Link>
                                   </div>
                              </div>
                              <div className="flex flex-col gap-y-[16px] lg:gap-y-[35px]">
                                   <h3 className="font-Gotham-Book text-[18px] lg:text-3xl leading-none">Contact US</h3>
                                   <div className="flex flex-col gap-y-1 lg:gap-y-[30px]">
                                        <div className="flex items-center">
                                             <BsTelephone />
                                             <p className="text-sm font-roboto font-normal text-justify ml-3 text-gray-300">+234 9035267309</p>
                                        </div>
                                        <Link to="mailto:info@hop.com" target='_blank' className="flex items-center cursor-pointer">
                                             <BsEnvelope />
                                             <p className="text-sm font-roboto font-normal hover:text-[#212fcd] text-justify ml-3 text-gray-300">info@hop.com</p>
                                        </Link>
                                        <div className="flex items-center">
                                             <BsGeoAlt />
                                             <p className="text-sm font-roboto font-normal text-justify ml-3 text-gray-300">213 St Louis Avenue, USA</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* ANCHOR  */}
                    <div className="flex flex-row items-center justify-between mt-2">
                         <div className="follow mt[15px] gap-y-4">
                              <p className="font-Gotham-Book text-sm leading-normal mb-2">Subsrcibe to get latest updates</p>
                              <form action="" method="post" className="flex items-center h-10" style={{ boder: "1px solid red" }}>
                                   <input type="email" name="" className="h-full w-52 py-[12px] px-[25px] outline-none border-none placeholder:text-[#181818] placeholder:font-roboto placeholder:font-normal placeholder:leading-normal placeholder:text-sm placeholder:text-justify" required placeholder="Enter Email" />
                                   <button type="submit" className="w-[90px] h-full flex items-center justify-center font-roboto font-normal text-base leading-normal bg-[#272fcd] p5" style={{ borderRadius: "0px 50px 50px 0px" }}>Subscribe</button>
                              </form>
                         </div>
                    </div>
               </div>
               <p className=" absolute text-sm font-normal font-poppins bg-white text-[#181818] hidden md:block" style={{ padding: "10px 70px" }}>@ 2023 HOP All rights reserved</p>
          </div>
     );
}

export default Footer;