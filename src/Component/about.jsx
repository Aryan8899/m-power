import React, { useState } from 'react';

const Section = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: (
        <>
          WE'RE THE FIRST FULL-SCALE AI-
          POWERED FINANCIAL <span className="text-yellow-500">ECOSYSTEM.</span>
          WE PROVIDE AI-SOLUTIONS FOR
          INVESTMENT, MANAGEMENT AND
          GROWTH.
        </>
      ),
      features: ['FULL TRANSPARENCY', 'RELIABLE LEGAL SUPPORT'],
    },
    {
      title: (
        <>
          OUR MISSION IS TO HARNESS THE
          TRANSFORMATIVE POWER OF AI IN
          ORDER TO CREATE NEW OPPORTUNITIES
          FOR <span className="text-yellow-500">EARNING</span> AND <span className="text-yellow-500">EDUCATION</span>,
          ALL WHILE INSPIRING PEOPLE WITH
          A FUTURE OF PROSPERITY.
        </>
      ),
      features: ['FAST REFUNDS WITHIN 24 HOURS', 'ABOVE-MARKET PROFITABILITY'],
    },
    {
      title: (
        <>
          OUR GOAL IS TO UNITE A MILLION
          PEOPLE INTO A COMMUNITY THAT
          SUCCESSFULLY USES M-POWER'S
          CUTTING-EDGE AI-BASED TOOLS TO
          GENERATE A STABLE PASSIVE INCOME
          OF <span className="text-yellow-500">$1,000 EVERY MONTH.</span>
        </>
      ),
      features: ['MARKETING PLAN WITH HIGH EFFICIENCY', 'A WORLD-CLASS TEAM'],
    },
  ];

  return (
    <section 
      className="bg-black text-white min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://m-power.group/assets/images/small/img-6.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 relative">
        {/* About Us Header */}
        <div className="text-yellow-500 text-base md:text-lg mb-8 md:mb-16">
          <span className="mr-2 font-normal">//</span>
          <span className="font-normal tracking-wider">ABOUT US</span>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

          {/* Slide Content */}
          <div className="pl-4 md:pl-8">
            <h1
              className="text-xl md:text-3xl leading-normal md:leading-[1.5] font-light tracking-wider whitespace-pre-line"
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
            >
              {slides[activeSlide].title}
            </h1>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mt-12 md:mt-40 font-bold gap-8 md:gap-0">
              {/* Features */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                {slides[activeSlide].features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-[0.75rem] text-white tracking-[0.2em] font-light"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* View Video Link */}
              <div className="order-first md:order-last">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm tracking-[0.2em] group hover:text-yellow-500 transition-colors duration-300"
                >
                  VIEW VIDEO <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute top-8 md:top-16 right-4 md:right-8 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-1 rounded-sm ${
                index === activeSlide ? 'bg-yellow-500' : 'bg-gray-500'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;