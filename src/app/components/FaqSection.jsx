import React from 'react';

const FaqSection = () =>{
  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Is AI Recruiter suitable for all industries?</h3>
            <p>Yes, it's designed to support a wide range of industries with customizable interview flows.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Can I customize the questions?</h3>
            <p>Absolutely! You can add, remove, or tweak questions for any job role as needed.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Do candidates need to install anything?</h3>
            <p>No, candidates can access the interview link directly via any browser—no installs required.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
