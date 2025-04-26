// components/Header.js
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* <img src="/public/logo.jpg"/> */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-20 w-20 object-contain rounded-4xl" />
          <h1 className="text-xl font-bold text-blue-600">AI Recruiter</h1>
        </div>
        <nav>
        <ul className="flex gap-6">
          <li><a href="#home" className="text-gray-700 hover:text-blue-600 hover:scale-125 hover:font-semibold transition-all duration-300 inline-block">Home</a></li>
          <li>
            <a href="#features" className="text-gray-700 hover:text-blue-600 hover:scale-125 hover:font-semibold transition-all duration-300 inline-block">Features</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 hover:scale-125 hover:font-semibold transition-all duration-300 inline-block">Contact</a>
          </li>
        </ul>
        </nav>
      </div>
    </header>
  )
}
