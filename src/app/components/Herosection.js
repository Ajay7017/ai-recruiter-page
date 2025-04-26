export default function HeroSection() {
  return (
    <section className="bg-[#eef3fd] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">How It Works</h1>
          <p className="text-lg text-gray-700 mb-6">
            Automate your hiring process with our AI-powered voice interview agent. Create interviews,
            generate questions, assess candidates — all with AI.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-3xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
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


  