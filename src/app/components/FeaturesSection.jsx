'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () =>{
  return (
    <section id="features" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src="/feature1.webp"
              alt="Feature 1"
              className="mx-auto mb-4 h-30 object-contain rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Customizable Interviews</h3>
            <p>Create tailored interviews based on job roles and skills.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src="/feature2.png"
              alt="Feature 2"
              className="mx-auto mb-4 h-30 object-contain rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">AI Question Generation</h3>
            <p>Generate relevant interview questions automatically with AI.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src="/feature3.png"
              alt="Feature 3"
              className="mx-auto mb-4 h-30 object-contain rounded-2xl"
            />
            <h3 className="text-xl font-semibold mb-2">Voice Interviews</h3>
            <p>Conduct voice-based interviews for natural communication.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
