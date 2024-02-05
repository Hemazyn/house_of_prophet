import { Header, ScrollTop, Footer } from "../components";
import { blogbg, tools, written, bible, phonepics } from "../assets";

const blogs = [
     {
          id: 1,
          icon: tools,
          alt: "Thanksgiving",
          thead: "Lorem ipsum dolor",
          tbody: "Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque.",
     },
     {
          id: 2,
          icon: written,
          alt: "Personal Growth",
          thead: "Lorem ipsum dolor",
          tbody: "Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque.",
     },
     {
          id: 3,
          icon: bible,
          alt: "Bible Study",
          thead: "Lorem ipsum dolor",
          tbody: "Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque.",
     },
     {
          id: 4,
          icon: phonepics,
          alt: "Kids and GOD",
          thead: "Lorem ipsum dolor",
          tbody: "Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque.",
     }
]
const Blogs = () => {
     return (
          <>
               <Header />
               <div className="w-[90%] mx-auto">
                    <div className="flex flex-col gap-y-5 my-8">
                         <h4 className="text-neutral-900 text-4xl font-semibold font-roboto uppercase text-center">News and Blog posts</h4>
                         <p className="text-justify text-neutral-900 text-xl font-normal font-roboto">Be up to date with our programs so that you can be part of any program you want. </p>
                    </div>
                    {/* section */}
                    <div className="flex flex-col">
                         <p className="text-neutral-900 text-3xl font-semibold font-roboto leading-9">NEWS UPDATES</p>
                         <div className="flex flex-col md:flex-row gap-y-2 gap-x-5 my-2">
                              <div className="w-full md:w-1/2">
                                   <div className="flex relative">
                                        <img src={blogbg} loading="lazy" alt="mid week debate" className="w-full rounded-lg relative" />
                                        <p className="font-roboto font-normal leading-snug absolute top-0 p-4 text-white bg-opacity-20 bg-gray-400 w-full rounded-t-lg">Mid week debate</p>
                                   </div>
                                   <div className="flex flex-row justify-between py-2">
                                        <p className="text-justify text-neutral-900 text-xl font-Gotham-Medium">Lorem ipsum dolor </p>
                                        <p className="text-justify text-neutral-900 text-sm font-normal font-roboto">12-8-23</p>
                                   </div>
                                   <p className="text-justify text-neutral-700 text-base font-normal font-roboto">Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque.</p>
                                   <button type="button" className="mt-4 text-indigo-700 text-base font-medium font-roboto px-4 py-1 rounded-lg border-2 border-indigo-700">View Update</button>
                              </div>
                              <div className="w-full md:w-1/2">
                                   <div className="flex relative">
                                        <img src={blogbg} loading="lazy" alt="mid week debate" className="w-full rounded-lg relative" />
                                        <p className="font-roboto font-normal leading-snug absolute top-0 p-4 text-white bg-opacity-20 bg-gray-400 w-full rounded-t-lg">Prayer Meeting</p>
                                   </div>
                                   <div className="flex flex-row justify-between py-2">
                                        <p className="text-justify text-neutral-900 text-xl font-Gotham-Medium">Lorem ipsum dolor </p>
                                        <p className="text-justify text-neutral-900 text-sm font-normal font-roboto">12-8-23</p>
                                   </div>
                                   <p className="text-justify text-neutral-700 text-base font-normal font-roboto">Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque. Lorem ipsum dolor sit amet consectetur. Nulla aliquet pellentesque.</p>
                                   <button type="button" className="mt-4 text-indigo-700 text-base font-medium font-roboto px-4 py-1 rounded-lg border-2 border-indigo-700">View Update</button>
                              </div>
                         </div>
                    </div>
                    {/* end */}
                    <p className="mt-4 text-neutral-900 text-3xl font-semibold font-roboto leading-normal">Topic</p>
                    <p className="text-justify text-neutral-900 text-base font-normal font-roboto">Want to learn more about any topic and be part of discussions? Check out our blog post.</p>
               </div>
               {/* section */}
               <div className="block py-5 bg-violet-50">
                    <div className="w-[90%] mx-auto">
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Topic</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Bible Studies</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Personal Growth</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Work With God</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Relationship</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Program Update</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Jesus</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Kids know God</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Prayers</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Thanksgiving</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Prophet Ministry</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Discipleship</button>
                         <button type="button" className=" text-blue-900 text-base md:text-xl font-normal font-roboto border-2 border-blue-900 px-5 py-1 rounded-2xl mb-3 mr-2">Topic</button>
                    </div>
               </div>
               {/* section */}
               <div className="w-[90%] mx-auto flex flex-col gap-y-4 my-4">
                    <p className="text-neutral-900 text-3xl font-semibold font-roboto leading-9">BLOG POST</p>
                    <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-y-2 gap-x-3 md:gap-x-5 my-2">
                         {blogs.map(({ id, icon, alt, thead, tbody }) => {
                              return (
                                   <div key={id} className="w-full shadow-lg rounded-lg p-3">
                                        <div className="flex relative">
                                             <img src={icon} alt={alt} loading="lazy" className="h-[250px] w-full rounded-lg relative bg-center bg-cover" />
                                             <p className="font-normal font-roboto absolute bottom-0 p-2 md:p-4 text-white bg-opacity-50 bg-gray-400 w-full rounded-b-md">{alt}</p>
                                        </div>
                                        <p className="text-start text-neutral-900 text-[16px] md:text-lg font-Gotham-Medium py-2">{thead}</p>
                                        <p className="text-start text-neutral-700 text-sm md:text-base font-normal font-roboto">{tbody}</p>
                                        <button type="button" className="w-full mt-4 text-indigo-700 text-base font-medium font-roboto leading-normal px-4 py-1 rounded-md border-2 border-indigo-700">View Update</button>
                                   </div>
                              );
                         })}
                    </div>
               </div>
               <Footer />
               <ScrollTop />
          </>
     );
}

export default Blogs;