import { useState, useEffect } from 'react';
import { Header, Footer, Loading, ScrollTop } from '../components';
import { galleryBg } from '../assets';
import { gallery1, gallery2, gallery3 } from '../constants';


const Galleries = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    await new Promise(resolve => setTimeout(resolve, 4000));
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
                         < div className="h-[500px] lg:h-[900px] w-full relative group">
                              <img src={galleryBg} loading="lazy" alt='gallery info' className="w-full h-full flex items-center bg-center bg-cover duration-500" />
                              <div className="absoluteProp w-4/5 mx-auto h-fit flex flex-col items-center justify-center gap-5 py-5 md:py-10 lg:py-20 px-4 text-white bg-opacity-60 backdrop-filter backdrop-blur-md" style={{ bordr: "2px solid red" }}>
                                   <h3 className="text-2xl lg:text-6xl font-Gotham-Bold">Gallery</h3>
                                   <p className="font-Gotham-Bold text-sm lg:text-2xl flex items-end">Embark on a visual odyssey at our ministry`s gallery, where divine inspiration meets artistic expression.</p>
                              </div>
                         </div >
                         {/* section */}
                         < div className="w-[90%] mx-auto py-5" >
                              <p className="text-sm md:text-xl font-roboto font-normal">Our curated collection transcends the ordinary, inviting you to explore the intersection of faith and creativity. Each piece serves as a testament to the profound connection between spirituality and artistry. Immerse yourself in the colors of devotion and the strokes of reverence, as we showcase the transformative power of visual storytelling. Witness the divine narrative unfold on our gallery page, a sacred space where the sacred and the aesthetic converge to elevate your spiritual journey.</p>
                         </div >
                         {/* section */}
                         < div className="w-[90%] mx-auto" >
                              <div className="mb-2">
                                   <p className="font-Gotham-Medium text-base md:text-2xl lg:text-3xl pb-2 md:pb-4">Scripture Study</p>
                                   <div className="flex flex-row gap-x-4">
                                        {gallery1.map(({ id, icon, alt }) => {
                                             return (
                                                  <div key={id} className="w-1/2 h-[200px] md:h-[350px]">
                                                       <img src={icon} loading="lazy" alt={alt} className="w-full h-full rounded-2xl bg-center bg-cover" />
                                                  </div>
                                             )
                                        })}
                                   </div>
                              </div>
                              <div className="mt-4">
                                   <p className="font-Gotham-Medium text-base md:text-2xl lg:text-3xl pb-2 md:pb-4">Prayer Time</p>
                                   <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-4 mb-4">
                                        {gallery2.map(({ id, icon, alt }) => {
                                             return (
                                                  <div key={id} className="h-300px md:h-[500px]">
                                                       <img src={icon} loading="lazy" alt={alt} className="w-full h-full rounded-2xl bg-center bg-cover" />
                                                  </div>
                                             )
                                        })}
                                   </div>
                              </div>
                              <div className="mt-4">
                                   <p className="font-Gotham-Medium text-base md:text-2xl lg:text-3xl pb-2 md:pb-4">Outreach</p>
                                   <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-x-4 gap-y-2 mb-4">
                                        {gallery3.map(({ id, icon, alt }) => {
                                             return (
                                                  <div key={id} className="h-[250px]">
                                                       <img src={icon} loading="lazy" alt={alt} className="w-full h-full rounded-2xl bg-center bg-cover" />
                                                  </div>
                                             )
                                        })}
                                   </div>
                              </div>
                         </div >
                         <Footer />
                         <ScrollTop />
                    </>
               )};
          </>
     );
}

export default Galleries;