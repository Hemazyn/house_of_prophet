import { LineWave } from 'react-loader-spinner';

const Loading = () => {
     return (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
               <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="line-wave-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    firstLineColor="#272fcd"
                    middleLineColor="#4fa94d"
                    lastLineColor="#c5cbgd"
               />
          </div>
     );
};

export default Loading;
