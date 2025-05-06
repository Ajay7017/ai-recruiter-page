import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Have questions? Interested in a demo? Send us a message!</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-50 border border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-50 border border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-gray-50 border border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;