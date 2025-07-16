import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional journey and work experience
        </p>
      </div>

      {/* Single Experience Card */}
      <div className="flex justify-center">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-full max-w-4xl p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            {/* Header with Logo and Company Info */}
            <div className="flex items-center space-x-6 mb-6">
              {/* Company Logo */}
              <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Role, Company Name, and Date */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {experience.role}
                </h3>
                <h4 className="text-xl text-purple-400 mb-1">
                  {experience.company}
                </h4>
                <p className="text-gray-400">{experience.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {experience.desc}
            </p>

            {/* Skills */}
            <div>
              <h5 className="font-semibold text-white text-lg mb-3">Skills & Technologies:</h5>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#8245ec] text-white px-4 py-2 text-sm rounded-lg border border-purple-400/30 hover:bg-purple-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
