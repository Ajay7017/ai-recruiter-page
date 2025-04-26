// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10 mt-10">
      <div className="max-w-7x1 mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} AI Recruiter. All rights reserved.</p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* 👉 Add simple social media icons here (LinkedIn, Twitter, GitHub) */}
          <a href="#" aria-label="Twitter" className="hover:text-blue-600 hover:scale-110 transition-transform duration-300">
            <img src="/X logo.avif" alt="Twitter" className="h-10 w-10 rounded-2xl" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 hover:scale-110 transition-transform duration-300">
            <img src="/LinkedIn Logo.jpg" alt="LinkedIn" className="h-10 w-10 rounded-2xl" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-blue-600 hover:scale-110 transition-transform duration-300">
            <img src="/github logo.webp" alt="GitHub" className="h-10 w-10 rounded-2xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

  