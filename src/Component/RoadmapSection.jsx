import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import walpaper from "../images/walpaper.jpeg";

const RoadmapSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timelineItems = [
    {
      period: "Q1-Q2",
      year: "2022",
      title: "Conceptualization and Team Formation",
      points: [
        "Conducted comprehensive market research to identify opportunities within AI and cryptocurrency sectors.",
        "Assembled a dedicated team of AI specialists and developers focused on proprietary trading algorithm development."
      ],
      date: "2022 → Q2-Q4",
      subtitle: "Foundation and Initial Development"
    },
    {
      period: "Q2-Q4",
      year: "2022",
      title: "Development and Beta",
      points: [
        "Developed and back-tested AI-driven trading algorithms aimed at optimizing returns",
        "Executed internal and closed beta testing of AI Crypto Management to ensure reliability"
      ],
      date: "Q1-Q2 ← 2022",
      subtitle: "Foundation and Initial Development"
    },
    {
      period: "Q1-Q2",
      year: "2023",
      title: "Soft Launch of AI Crypto Management",
      points: [
        "Initiated a soft launch of AI Crypto Management for an invite-only user base to gather preliminary data.",
        "Collected and analyzed user feedback for iterative improvements to enhance system performance and user experience."
      ],
      date: "2023 → Q3-Q4",
      subtitle: "Pre-Launch Preparation and Soft Launch"
    },
    {
      period: "Q1",
      year: "2024",
      title: "Public Launch and Initial Product Development",
      points: [
        "Public announcement of M-POWER",
        "Initiated market research and outlined user requirements for M-Wallet, a crypto neobank with AI assistant.",
        "Began architectural design and development of security protocols for M-Wallet.",
        "Conducted market and competitor analysis for M-Change to define the initial framework and feature set."
      ],
      date: "Q3-Q4 ← 2023    2024 → Q2",
      subtitle: "Official Launch and Expansion of Services"
    },
    {
      period: "Q1",
      year: "2025",
      title: "Product Launches and Support",
      points: [
        "Official product launch of M-Change.",
        "Launched a beta version of M-Cademy to selected users for real-world testing and feedback collection.",
        "Established foundational architecture and developed initial protocols for M-Chain."
      ],
      date: "Q4 ← 2024    2025 → Q2-Q3",
      subtitle: "Full-Scale Deployment and Expansion"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineItems.length) % timelineItems.length);
  };

  return (
    <div className="bg-black min-h-screen relative py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-yellow-500 text-xl font-bold tracking-wide">ROADMAP///</h1>
      </div>

      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline Card */}
          <div className="relative overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0">
              <img 
                src={walpaper}
                
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-yellow-500 text-6xl font-bold mb-2">
                      {timelineItems[currentIndex].period}
                    </h2>
                    <h3 className="text-yellow-500 text-3xl font-light mb-6">
                      {timelineItems[currentIndex].title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {timelineItems[currentIndex].points.map((point, index) => (
                      <li key={index} className="text-gray-300 leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  {/* Timeline Date */}
                  <div className="pt-4">
                    <p className="text-gray-400 text-lg">
                      {timelineItems[currentIndex].date}
                    </p>
                  </div>
                </div>
                
                {/* Right Content - Visual Element */}

              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Bottom Title */}
        <div className="text-center mt-12">
          <h2 className="text-white text-3xl font-light">
            {timelineItems[currentIndex].year}:
          </h2>
          <h3 className="text-white text-3xl font-light">
            {timelineItems[currentIndex].subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;