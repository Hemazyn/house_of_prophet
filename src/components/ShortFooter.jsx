import { Link } from 'react-router-dom';
import { ScrollTop } from "../components/index";

const ShortFooter = () => {
     return (
          <>
               <div className="w-full flex flex-row justify-between items-center bg-neutral-900 text-white h-10 relative">
                    <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
                         <p className="text-xs font-roboto font-normal">For Sponsorship: Call +234 809 5625 668</p>
                         <Link to="/">
                              <p className="text-xs cursor-pointer font-roboto font-normal">Go to Homepage</p>
                         </Link>
                    </div>
               </div>
               <ScrollTop />
          </>
     );
};

export default ShortFooter;
