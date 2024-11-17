import React, { useEffect, useRef } from 'react';
import gif from "../images/gif.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="w-full h-screen bg-black relative">
      {/* Full-screen video background */}
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

      {/* Content overlay */}
      <div className="relative w-full h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            {/* Text content */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
                LOCK THE FUTURE OF
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 tracking-wide">
                FINANCIAL
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
                OPPORTUNITIES
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
                WITH <span className="text-yellow-400">AI</span>
              </h1>
            </div>

            {/* Circular button */}
            <div className="mt-12">
              <button className="relative w-24 h-24 md:w-32 md:h-32 rounded-full group">
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400" />
                <div className="absolute inset-1 rounded-full border border-yellow-400/30" />
                <div className="absolute inset-2 rounded-full bg-black/80 flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
                  <span className="text-white text-sm md:text-base font-bold">LETS TALK</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;