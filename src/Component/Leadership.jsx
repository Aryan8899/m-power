import React from 'react';
import billy from "../images/billy.png"; // Adjust the import path as needed

const LeadershipCard = () => {
  const roles = [
    "PUBLIC RELATIONS OFFICER",
  ];

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Leadership text */}
      <div className="px-12 py-6">
        <h3 className="text-yellow-400 font-bold text-3xl">LEADERSHIP ///</h3>
      </div>

      {/* Main card */}
      <div className="bg-[#141414] text-white w-full md:flex block h-auto md:h-[800px]">
        {/* Left side with investment director */}
        <div className="md:w-40 w-full bg-[#141414] flex items-center justify-center md:mb-70">
          <span className="text-yellow-500 uppercase font-medium text-lg md:-rotate-90 transform whitespace-nowrap tracking-wider">
            INVESTMENT DIRECTOR
          </span>
        </div>

        {/* Center content */}
        <div className="flex-1 md:flex block px-4 md:px-16 py-12 md:gap-16">
          {/* Image */}
          <div className="w-full md:h-full mt-0 md:mt-75">
            <img
              src={billy}
              alt="Bill Watson"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center max-w-3xl mt-8 md:mt-0">
            <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-6 md:mb-10">
              BILL WATSON
            </h2>
            <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed">
              Bill heads M-Power's Strategic Investments department, as well as interactions with authorities and obtaining registrations. He ensures financial stability and strengthens our investor relations.
            </p>
          </div>
        </div>

        {/* Right side roles */}
        <div className="md:w-40 w-full bg-[#141414] flex items-center justify-center">
          <div className="flex md:flex-col gap-20 md:mb-50">
            {roles.map((role, index) => (
              <span
                key={index}
                className="text-white uppercase font-medium text-lg md:-rotate-90 transform whitespace-nowrap tracking-wider"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;