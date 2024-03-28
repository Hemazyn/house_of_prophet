import { useState, useEffect } from "react";
import {
  Folds,
  Header,
  Loading,
  Tutors,
  ScrollTop,
  ShortFooter,
  Testimony,
} from "../components";
import { aboutBg, aboutInfo } from "../assets";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
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
          <div className="h-[500px] lg:h-[900px] w-full group relative">
            <img
              src={aboutBg}
              loading="lazy"
              alt="about info"
              className="w-full h-full flex items-center bg-center bg-cover duration-500"
            />
            <div
              className="absoluteProp w-4/5 mx-auto h-fit flex flex-col items-center justify-center py-5 md:py-10 lg:py-20 px-4
                                                            text-white bg-opacity-60 backdrop-filter backdrop-blur-md gap-5"
            >
              <h3 className="text-2xl lg:text-6xl font-Gotham-Bold">
                About Us
              </h3>
              <p className="font-Gotham-Bold text-sm lg:text-2xl flex items-end">
                Welcome to House of Prophets! We are dedicated to serving our
                community, fostering spiritual growth, and spreading love. Join
                us in our mission to make a positive impact together.
              </p>
            </div>
          </div>
          {/* section */}
          <>
            <div className="w-[90%] h-fit my-6 mx-auto gap-3 bg-white flex flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-1/2">
                <p className="font-roboto font-normal text-sm md:text-base lg:text-xl">
                  House of Prophets is a platform God himself has established to
                  raise a complete Army who is not only spiritually fit but also
                  ready in other areas where Christ must be Lord. This vision
                  was received as a continuation of the move of God in the days
                  of Samuel in the book of 1 Sam 10: 5-10. The house is equipped
                  and furnished to meet your spiritual, academic, marital,
                  financial and intellectual need. We`ve a covenant backup and
                  spiritual covering over us. The days of Jacob`s encounter are
                  upon us, where God appeared unto men.
                </p>
                <div className="py-2">
                  <span className="font-Gotham-Bold text-sm md:text-base lg:text-xl">
                    Our regular activities includes:
                  </span>
                  <ul className="">
                    <li className="font-roboto font-normal">
                      Daily Report of the day`s activities
                    </li>
                    <li className="font-roboto font-normal">
                      Weekly Meetings (Saturdays)
                    </li>
                    <li className="font-roboto font-normal">
                      Sub-training Schools and Platforms
                    </li>
                  </ul>
                </div>
                <p className="font-roboto font-normal text-sm md:text-base lg:text-xl">
                  {" "}
                  By adhering to this aim, mission, and vision, the `House of
                  Prophet` can become a beacon of light and spiritual
                  inspiration, impacting the lives of individuals and the world
                  at large through the sharing of prophetic insights and the
                  pursuit of a more harmonious and spiritually enlightened
                  future. Be blessed as you participate!
                </p>
              </div>
              <img
                className="w-full md:w-1/2 h-2/5"
                src={aboutInfo}
                alt="about-info"
                loading="lazy"
              />
            </div>
            <Folds />
          </>
          <Tutors />
          <Testimony />
          <ScrollTop />
          <ShortFooter />
        </>
      )}
    </>
  );
};

export default AboutPage;
