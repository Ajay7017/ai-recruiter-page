'use client';
import { motion } from 'framer-motion';

const HeroSectionAnimation =() =>{
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Revolutionize Hiring with AI Interviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mb-8"
        >
          AI Recruiter conducts unbiased, automated voice interviews tailored to your job roles.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSectionAnimation;
