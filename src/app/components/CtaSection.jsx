'use client';
import React from 'react';

const CtaSection =()=>{
  return (
    <section id="cta" className="py-10 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
        <p className="mb-8 text-lg">Start your 7-day free trial and experience AI-driven interviews today.</p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">
          Get Started Free
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
