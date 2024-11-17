import React, { useState } from 'react';
import pic1 from "../images/pic1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      
      <header className="fixed top-0 left-0 w-full bg-black/95 px-2 md:px-4 py-2 z-50 overflow-hidden">
  <nav className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center"
      >
        <img src={pic1} alt="M" className="h-6 md:h-8" />
        <span className="text-xl md:text-2xl font-bold text-white ml-2">POWER</span>
      </button>
    </div>
    
    <div className="hidden md:flex items-center space-x-8">
      {['about', 'solution', 'why-ai', 'growth', 'leadership', 'roadmap'].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
        >
          {item.split('-').map(word => word.toUpperCase()).join(' ')}
        </button>
      ))}
    </div>

    <div className=" md:flex items-center gap-3">
      <button className="px-4 py-1.5 text-white border border-yellow-400 rounded-full text-xs hover:bg-yellow-400 hover:text-black transition-colors">
        Sign in
      </button>
      <button className="px-4 py-1.5 text-black bg-yellow-400 rounded-full text-xs hover:bg-yellow-500 transition-colors">
        Sign up
      </button>
    </div>

   

    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden w-8 h-8 flex items-center justify-center"
      aria-label="Toggle menu"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-6 h-6 text-yellow-400" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        {isMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>

    <div 
      className={`fixed inset-0 bg-black/95 transition-all duration-300 md:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ top: '48px' }}
    >
      
      <div className="px-4 py-2 flex flex-col">
        <div className="space-y-1">
          {[
            { id: 'about', label: 'ABOUT US' },
            { id: 'solution', label: 'OUR SOLUTION' },
            { id: 'why-ai', label: 'WHY AI' },
            { id: 'growth', label: 'GROWTH' },
            { id: 'leadership', label: 'LEADERSHIP' },
            { id: 'roadmap', label: 'ROADMAP' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-200 hover:text-yellow-400 text-sm font-medium transition-colors py-0.5"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        
      </div>
    </div>
  </nav>
</header>

    </div>
  );
};

export default Header;