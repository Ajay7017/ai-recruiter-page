'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection= () =>{
  return (
    <section
      id="how-it-works"
      className="py-16 px-4 bg-gradient-to-b from-white via-[#f5faff] to-[#ebf4fa]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">How AI Recruiter Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src="/step1.webp"
              alt="Step 1"
              className="mx-auto mb-4 h-30 object-contain rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Step 1: Create Job Role</h3>
            <p>
              Input job details and candidate criteria to generate a tailored
              interview flow.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src="/step2.png"
              alt="Step 2"
              className="mx-auto mb-4 h-30 object-contain rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Step 2: Conduct Interview</h3>
            <p>
              Send AI interview link to candidates and let our voice bot handle
              the rest.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src="/step3.avif"
              alt="Step 3"
              className="mx-auto mb-4 h-30 object-contain rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Step 3: Review & Hire</h3>
            <p>
              Analyze responses, view AI-generated insights, and shortlist the
              best talent.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
