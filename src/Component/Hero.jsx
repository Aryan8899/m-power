import React, { useEffect, useRef } from 'react';
import gif from "../images/gif.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-[85vh] flex flex-col md:flex-row">
        {/* Mobile layout */}
        <div className="relative w-full h-full md:hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/api/placeholder/400/320"
          >
            <source src={gif} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Mobile content - adjusted top padding */}
          <div className="relative h-full flex flex-col items-center px-4 z-10">
            {/* Text content - added more top margin */}
            <div className="text-center space-y-2 mt-32">
              <h1 className="text-3xl font-bold text-white">FUTURE OF</h1>
              <h1 className="text-3xl font-bold text-white">FINANCIAL</h1>
              <h1 className="text-3xl font-bold text-white">OPPORTUNITIES</h1>
              <h1 className="text-3xl font-bold text-white">WITH <span className="text-yellow-400">AI</span></h1>
            </div>

            {/* Circular Button - adjusted margin */}
            <button className="relative mt-16 w-24 h-24 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400" />
              <div className="absolute inset-1 rounded-full border border-yellow-400/30" />
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-sm font-bold">LETS TALK</span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop layout - unchanged */}
        <div className="hidden md:flex w-full">
          <div className="w-1/2 flex flex-col justify-center items-start space-y-4 px-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-white">UNLOCK THE FUTURE OF</h1>
              <h1 className="text-5xl font-bold text-white">FINANCIAL</h1>
              <h1 className="text-5xl font-bold text-white">OPPORTUNITIES</h1>
              <h1 className="text-5xl font-bold text-white">WITH <span className="text-yellow-400">AI</span></h1>
            </div>
            <button className="relative mt-8 w-32 h-32 rounded-full bg-transparent border-2 border-yellow-400 group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 group-hover:bg-yellow-400/30 transition-colors duration-300" />
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-bold">LETS TALK</span>
              </div>
            </button>
          </div>
          <div className="w-1/2">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-[85vh] w-full object-cover"
            >
              <source src={gif} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;