import './Loading.css';
import { useState } from 'react';

const Loading = ({ loading }) => {
  const [isLoading, setIsLoading] = useState(true);
  if (!loading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 11000);
  }

  return (
    <div
      className={`absolute inset-0 top-[5.5rem] md:top-72 lg:top-4 flex items-center justify-center transition-opacity delay-200 duration-500 bg-[#4492f460] w-[420px] h-[310px] md:w-[480px] md:h-[310px] lg:w-[640px] lg:h-[480px] max-w-[640px] max-h-[480px] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`transition-opacity delay-200 duration-500 ${
          isLoading
            ? 'loading opacity-100'
            : 'loading opacity-0 pointer-events-none'
        } `}
      >
        <div className="finger finger-1">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="finger finger-2">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="finger finger-3">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="finger finger-4">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="last-finger">
          <div className="last-finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
      </div>
      <span className=" mt-28 text-white font-semibold text-xl ">
        This will only take a few seconds
      </span>
    </div>
  );
};

export default Loading;