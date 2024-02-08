import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Hero, Blog, Footer, Loader, ScrollTop } from "../components/index";

const Home = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    await new Promise(resolve => setTimeout(resolve, 3000));
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
               {loading ? (
                    <Loader />
               ) : (<>
                    <Header />
                    <Hero />
                    <div className="bg-[#272fcd] text-white">
                         <div className="w-[90%] mx-auto py-5" >
                              <h3 className="text-[20px] md:text-[40px] font-Gotham-Medium mb-5 uppercase">About Us</h3>
                              <div className="flex flex-col">
                                   <p className="font-Gotham-Book text-[14px] lg:text-[20px] mb-5 lg:mb-10">House of Prophets is a platform God himself has established to raise a complete Army who is not only spiritually fit but also ready in other areas where christ must be lord.
                                        <br /> This vision was received as a continuation of the move of God in the days of Samuel in the book of 1 Sam 10:5-10.</p>
                                   <p className="font-Gotham-Book text-[14px] lg:text-[20px]  mb-5 lg:mb-10">The house is equipped and furnish to meet your spiritual, academic, marital, financial and intellectual need.
                                        <br />We`ve a convenant backup and spiritual covering over us. The days of Jacob`s encounter are upon us, where God appeared unto men.</p>
                              </div>
                              <Link to="/about">
                                   <button className="bg-white text-[#0e1487] p-[10px] lg:px-[30px] rounded-md font-roboto font-semibold">Learn More</button>
                              </Link>
                         </div>
                    </div>
                    <Blog />
                    <Footer />
                    <ScrollTop />
               </>
               )}
          </>
     );
}

export default Home;