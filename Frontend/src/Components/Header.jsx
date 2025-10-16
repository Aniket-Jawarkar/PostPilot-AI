import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
  
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

     
        <nav className="hidden md:flex space-x-6 items-center">
         
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-blue-600 flex items-center gap-1">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

           
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <a href="#feature1" className="block px-4 py-2 hover:bg-gray-100">
                  Analytics
                </a>
                <a href="#feature2" className="block px-4 py-2 hover:bg-gray-100">
                  Automation
                </a>
                <a href="#feature3" className="block px-4 py-2 hover:bg-gray-100">
                  Integrations
                </a>
              </div>
            )}
          </div>

        
          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#faq" className="hover:text-blue-600">
            FAQ
          </a>
        </nav>

     
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Sign Up Free
          </button>
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
