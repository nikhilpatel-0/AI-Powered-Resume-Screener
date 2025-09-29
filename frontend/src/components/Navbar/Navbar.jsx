import React, { useState } from "react";

const Navbar = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 text-white px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name */}
          <h2 className="font-bold">AI Resume</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 font-light">
            <a href="#" className="hover:text-indigo-300">
              Home
            </a>
            <a href="#" className="hover:text-indigo-300">
              About
            </a>
            <a href="#" className="hover:text-indigo-300">
              Features
            </a>
            <a href="#" className="hover:text-indigo-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 font-light mt-4 text-center">
            <a href="#" className="hover:text-indigo-300">
              Home
            </a>
            <a href="#" className="hover:text-indigo-300">
              About
            </a>
            <a href="#" className="hover:text-indigo-300">
              Features
            </a>
            <a href="#" className="hover:text-indigo-300">
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
