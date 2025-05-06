// components/PricingSection.jsx
import React from "react";
const PricingSection = () => {
    return (
      <section id="pricing" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Simple & Transparent Pricing</h2>
  
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Basic Plan Card */}
            <div className="border p-8 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">$29<span className="text-lg">/month</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✓ Up to 50 interviews</li>
                <li>✓ Basic analytics</li>
                <li>✓ Email support</li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">Get Started</button>
            </div>
  
            {/* Pro Plan Card */}
            <div className="border p-8 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out bg-blue-50">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">$59<span className="text-lg">/month</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✓ Unlimited interviews</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default PricingSection;
  