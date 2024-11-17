import React, { useState } from 'react';
import car from "../images/car.jpg";
import coin from "../images/coin.jpeg";

const BonusSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "EVERY STEP YOU TAKE",
      highlightedText: "BRINGS YOU CLOSER TO NEW ",
      Text: "HEIGHTS AND SUCCESS!",
      buttonText: "BECOME A PARTNER",
      description: "GROWTH///",
    },
    {
      title: "WITH ITS INNOVATIVE BUSINESS MODEL,",
      highlightedPart: "M-POWER OFFERS",
      remainingText: "EVERYONE A UNIQUE OPPORTUNITY TO BUILD THEIR BUSINESS",
      buttonText: "VIEW MORE",
      description: "GROWTH///",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8 relative">
      {/* Slider Section */}
      <div className="mb-8 h-full relative">
        <p className="text-yellow-400 text-sm mb-4 md:mb-8">
          {slides[currentSlide].description}
        </p>
        
        {currentSlide === 0 ? (
          <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl font-light leading-tight">
              {slides[currentSlide].title}
            </h1>
            <div className="text-2xl md:text-5xl font-light leading-tight text-yellow-400">
              {slides[currentSlide].highlightedText}
            </div>
            <div className="text-2xl md:text-5xl font-light leading-tight text-yellow-400">
              {slides[currentSlide].Text}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[40vh] md:min-h-[60vh]">
            <div className="relative pl-4 md:pl-8 space-y-4">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 w-px h-full bg-white"></div>
              
              <h1 className="text-2xl md:text-5xl font-light leading-tight">
                {slides[currentSlide].title}
              </h1>
              <div className="text-2xl md:text-5xl font-light leading-tight">
                <span className="text-yellow-400">{slides[currentSlide].highlightedPart}</span>{' '}
                {slides[currentSlide].remainingText}
              </div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          className={`mt-8 bg-neutral-800 text-white px-6 md:px-8 py-3 rounded hover:bg-neutral-700 transition-all uppercase text-sm ${
            currentSlide === 1 ? 'absolute bottom-0 left-0 md:bottom-8 md:left-8' : ''
          }`}
          onClick={nextSlide}
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute top-4 md:top-8 right-4 md:right-8 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-1 transition-all ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-neutral-700'
            } cursor-pointer`}
          />
        ))}
      </div>

      {/* Bonus Cards Section - Only visible on first slide */}
      {currentSlide === 0 && (
        <div className="mt-12 md:mt-0 md:absolute md:top-24 md:right-8 w-full md:w-[45%] space-y-4 md:space-y-6">
          <div className="bg-neutral-900/80 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm w-full md:w-[60%] md:ml-auto">
            <h3 className="text-yellow-400 text-lg md:text-xl font-medium mb-2">
              Income from team income
            </h3>
            <p className="text-gray-300 text-sm md:text-base">Earn a bonus from your team's income.</p>
          </div>

          <div className="bg-neutral-900/80 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10 max-w-[60%] md:max-w-full">
              <h3 className="text-yellow-400 text-lg md:text-xl font-medium mb-2">Gift Bonus</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Climb the ranks in M-Power and earn luxurious rewards like iPhones,
                Rolex watches, cars, and even elite real estate.
              </p>
            </div>
            <img
              src={car}
              alt="Luxury car"
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-70"
            />
          </div>

          <div className="bg-neutral-900/80 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10 max-w-[70%]">
              <h3 className="text-yellow-400 text-lg md:text-xl font-medium mb-2">
                Referral Bonus
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                The size of the bonus depends on your rank and the ranks of your
                partners — the higher your rank, the bigger the bonus.
              </p>
            </div>
            <img
              src={coin}
              alt="Coin image"
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-70 md:left-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BonusSection;