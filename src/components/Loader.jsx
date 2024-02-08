import { Bars } from 'react-loader-spinner';

const Loader = () => {
     return (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
               <Bars
                    height="80" width="80" color="#272fcd"
                    ariaLabel="bars-loading" wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
               />
          </div>
     );
};

export default Loader;
