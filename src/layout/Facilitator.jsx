import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, Loading, ScrollTop } from "../components";
import { facilitatorBg } from "../assets";
import { facilitator } from "../constants";


const Facilitator = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    setLoading(false);
               } catch (error) {
                    console.error('Error:', error);
                    setLoading(false);
               }
          };
          fetchData();
     }, []);

     return (
          <>
               <Header />
               {loading ? (
                    <Loading />
               ) : (
                    <>
                         {/* section */}
                         <div className="h-[500px] lg:h-[900px] w-full relative group">
                              <img src={facilitatorBg} loading="lazy" alt="facilitator info" className="w-full h-full flex items-center bg-center bg-cover duration-500" />
                              <div className="absoluteProp w-4/5 mx-auto h-fit flex flex-col items-center justify-center gap-5 py-5 md:py-10 lg:py-20 px-4 text-white bg-opacity-60 backdrop-filter backdrop-blur-xl" style={{ bordr: "2px solid red" }}>
                                   <h3 className="text-2xl lg:text-6xl font-Gotham-Bold">Meet our facilitators</h3>
                                   <p className="font-Gotham-Bold text-sm lg:text-2xl flex items-end">Discover the guiding lights behind our ministry`s transformative experiences </p>
                              </div>
                         </div >
                         {/* section */}
                         < div className="w-[90%] mx-auto py-5 md:py-10" >
                              <p className="text-sm md:text-xl font-roboto font-normal">Our dedicated facilitators. Rooted in faith and equipped with a passion for spiritual growth, they bring a wealth of knowledge and a compassionate spirit to every session. Meet the heart and soul of our ministry, individuals committed to fostering connections, deepening understanding, and guiding you on your spiritual journey. With diverse backgrounds and a shared commitment to service, our facilitators embody the ministry`s mission to create a nurturing space for exploration and enlightenment. Get to know the faces shaping your experience, as they inspire, support, and walk alongside you on this sacred path.</p>
                         </div >
                         {/* section */}
                         < div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-x-4 gap-y-4 mb-4" >
                              {facilitator.map(({ id, icon, alt, name, bio }) => {
                                   return (
                                        <div key={id} className="relative max-w-md mx-auto rounded-lg overflow-hidden shadow-lg p-3 bg-white">
                                             <img src={icon} alt={alt} loading="lazy" className="w-full h-96 bg-cover bg-center rounded-t-lg" />
                                             <div className="py-2 bg-white">
                                                  <h5 className="text-xl font-Gotham-Medium text-gray-900 mb-2">{name}</h5>
                                                  <p className="text-gray-700 text-base font-roboto font-normal">{bio}</p>
                                                  <div className="mt-4">
                                                       <button type="button" className="inlineflex items-center px-4 py-2 bg-blue-500 text-white font-roboto font-semibold text-xs leading-normal rounded-[4px] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                            <Link to="/appointment">Book an appointment</Link>
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div >
                         <Footer />
                         <ScrollTop />
                    </>
               )};
          </>
     );
}

export default Facilitator;