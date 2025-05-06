export default function HeroSection() {
  return (

    <section className="bg-[#eef3fd] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">How It Works</h1>
          <p className="text-lg text-gray-700 mb-6">
          Streamline your recruitment with our AI-driven voice interview agent. Effortlessly create customized interviews, auto-generate relevant questions, and evaluate candidate responses in real-time. Say goodbye to manual screening — our intelligent solution accelerates hiring, saves time, and helps you identify top talent faster. Smart hiring starts with AI-powered automation
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src="/AI interview illustration.avif" // make sure image is inside /public folder
            alt="AI Interview Illustration"
            className="w-full max-w-md h-auto object-contain rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}


  