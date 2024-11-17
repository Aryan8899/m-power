import React, { useRef } from 'react';
import image from "../images/image.png";

const AIAnalysis = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { text: "WHY AI?", active: true },
    { text: "HOW THE AI ALGORITHM WORKS?" },
    { text: "AI ANALYTICS IN M-POWER" },
    { text: "WE ANALYZE" },
    { text: "WHAT DO WE DO WITH THIS DATA?" }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background image section */}
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src={image} 
          alt="space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Main content */}
      <div className="px-4 md:px-16 py-4 md:py-8">
        {/* Navigation Menu with Slider */}
        <nav className="mb-8 md:mb-24 relative">
          {/* Scroll buttons - only show on mobile when scrollable */}
          <button 
            onClick={() => scroll('left')}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 text-white"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 text-white"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <ul className="flex whitespace-nowrap md:justify-between items-center text-sm md:text-base py-4">
              {menuItems.map((item, index) => (
                <li 
                  key={index}
                  className={`inline-block px-6 md:px-0 ${
                    item.active ? 'text-yellow-400 font-bold' : 'text-white'
                  } tracking-wider cursor-pointer relative group`}
                >
                  {item.text}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    item.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          {/* Background grid lines */}
          <div className="absolute inset-0 -z-10" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)
            `,
            backgroundSize: '100px 100px'
          }} />

          {/* Left side with plus icon */}
          <div className="hidden md:block pt-2">
            <div className="text-gray-600 text-2xl">+</div>
          </div>

          {/* Center content */}
          <div className="flex-1 max-w-3xl">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The prospects of AI are not just great in theory, they are also pretty incredible once you look at statistics. As with any big development in the world, one has to act quickly to harness the impact that can be made.{' '}
              <span className="block mt-2">
                Projected AI market size by 2027 is <span className="text-yellow-400">$407 billion</span> with <span className="text-yellow-400">$1.8</span> trillion projected global AI market revenue in 2030.
              </span>
            </p>
          </div>

          {/* Right side content with vertical line */}
          <div className="text-center md:text-right relative md:pl-8 mt-8 md:mt-0">
            <div className="hidden md:block absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-30" />
            <div className="space-y-0.5">
              <div className="text-white text-2xl md:text-3xl font-bold tracking-wider">REVOLUTIONIZING</div>
              <div className="text-white text-2xl md:text-3xl font-bold tracking-wider">INVESTMENT</div>
              <div className="text-white text-2xl md:text-3xl font-bold tracking-wider">DECISIONS WITH</div>
              <div className="text-yellow-400 text-2xl md:text-3xl font-bold tracking-wider">DATA-DRIVEN</div>
              <div className="text-white text-2xl md:text-3xl font-bold tracking-wider">INSIGHTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;