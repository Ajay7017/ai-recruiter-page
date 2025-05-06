import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#f5faff] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Why Choose AI Recruiter?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Save time, reduce bias, and make smarter hiring decisions with our fully automated AI interviewing system.
            Customize interviews based on role requirements and assess candidates objectively.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">Learn More</button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src="/about-illustration.jpg" 
            alt="About AI Recruiter"
            className="w-full max-w-md h-auto object-contain rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;