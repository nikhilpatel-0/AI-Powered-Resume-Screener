import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold">AI-Resume</h1>

        <div className="hidden md:flex space-x-6">
          <a href="" className="hover:text-gray-300">
            Home
          </a>
          <a href="" className="hover:text-gray-300">
            Features
          </a>
          <a href="" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="" className="hover:text-gray-300">
            About
          </a>
        </div>

        <button className="hidden md:block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer">
          Try Now
        </button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <a href="" className="block hover:text-gray-300">
            Home
          </a>
          <a href="" className="block hover:text-gray-300">
            Features
          </a>
          <a href="" className="block hover:text-gray-300">
            Pricing
          </a>
          <a href="" className="block hover:text-gray-300">
            About
          </a>
          <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer">
            Try Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
