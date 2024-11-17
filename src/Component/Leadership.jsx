import React from 'react';
import billy from "../images/billy.png"; // Adjust the import path as needed

const LeadershipCard = () => {
  const roles = [
    "PUBLIC RELATIONS OFFICER",
  ];

  return (
    <div className="w-full bg-black">
      {/* Leadership text */}
      <div className="px-12 py-4">
        <h3 className="text-yellow-400 font-bold text-3xl">LEADERSHIP ///</h3>
      </div>

      {/* Main card */}
      <div className="bg-[#141414] text-white w-full md:flex block h-auto md:h-[500px]">
        {/* Left side with investment director */}
        <div className="md:w-40 w-full bg-[#141414] flex items-center justify-center">
          <span className="text-yellow-500 uppercase font-medium text-lg md:-rotate-90 transform whitespace-nowrap tracking-wider">
            INVESTMENT DIRECTOR
          </span>
        </div>

        {/* Center content */}
        <div className="flex-1 md:flex block px-4 md:px-12 py-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:h-full">
            <img
              src={billy}
              alt="Bill Watson"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center max-w-3xl mt-6 md:mt-0">
            <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              BILL WATSON
            </h2>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              Bill heads M-Power's Strategic Investments department, as well as interactions with authorities and obtaining registrations. He ensures financial stability and strengthens our investor relations.
            </p>
          </div>
        </div>

        {/* Right side roles */}
        <div className="md:w-40 w-full bg-[#141414] flex items-center justify-center">
          <div className="flex md:flex-col gap-16">
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