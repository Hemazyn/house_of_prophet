import { Vortex } from 'react-loader-spinner';

const Loading = () => {
     return (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
               <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
               />
          </div >
     );
};

export default Loading;
