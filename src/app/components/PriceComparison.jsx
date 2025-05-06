import React from 'react';

const PriceComparison = () => {
  return (
    <section id="pricing" className="py-16 bg-[#f0f4f8] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-gray-600 mb-6">Perfect for small teams and startups.</p>
            <div className="text-4xl font-bold mb-6">$49<span className="text-lg font-normal">/month</span></div>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Up to 10 Interviews</li>
              <li>Basic Question Templates</li>
              <li>Email Support</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">Get Started</button>
          </div>

          {/* Plan 2 */}
          <div className="bg-blue-600 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Professional</h3>
            <p className="mb-6">Ideal for growing businesses.</p>
            <div className="text-4xl font-bold mb-6">$99<span className="text-lg font-normal">/month</span></div>
            <ul className="mb-6 space-y-2">
              <li>Unlimited Interviews</li>
              <li>Advanced AI Questioning</li>
              <li>Priority Support</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">Get Started</button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">Tailored solutions for large organizations.</p>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Dedicated Account Manager</li>
              <li>Custom Integrations</li>
              <li>24/7 Support</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
