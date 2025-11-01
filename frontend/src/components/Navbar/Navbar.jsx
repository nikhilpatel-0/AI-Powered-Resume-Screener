import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies  from "js-cookie";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect( () => {
    const token = Cookies.get("token")
    if(token) setIsLoggedIn(true)
    else setIsLoggedIn(false)
  }, [])

  const handleLogOut = () => {
    Cookies.remove("token")
    setIsLoggedIn(false)
    window.location.href = "/"
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl ring-1 ring-white/10 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h2 className="font-bold text-lg">AI Resume</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-light">
          <Link to="/" className="hover:text-indigo-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-300 transition">
            About
          </Link>
          <Link to="/features" className="hover:text-indigo-300 transition">
            Features
          </Link>

          {/* Auth Buttons */}
          {!isLoggedIn ? (
          <div className="flex items-center gap-3 ml-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg ring-1 ring-indigo-500/50 hover:bg-indigo-600/30 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-indigo-700 transition font-medium"
            >
              Sign Up
            </Link>
          </div>
          ) : (
          <div>
            <button
            onClick={handleLogOut}
            className="px-3 py-2 font-medium bg-red-500/50 hover:bg-red-600/70 rounded-lg  transition"
            >
              Logout
            </button>
          </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 font-light mt-4 text-center">
          <Link to="/" className="hover:text-indigo-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-300">
            About
          </Link>
          <Link to="/features" className="hover:text-indigo-300">
            Features
          </Link>

          {/* Auth Buttons (Mobile) */}
          {!isLoggedIn ? (
          <div className="flex flex-col gap-2 mt-2">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg ring-1 bg-white/20 ring-indigo-500/50 hover:bg-indigo-600/30 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-indigo-700 transition font-medium"
            >
              Sign Up
            </Link>
          </div>
          ) : (
          <div >
            <button 
            onClick={handleLogOut}
            className="px-4 py-2 rounded-lg  bg-red-500/50 hover:bg-red-600/70  transition font-medium">
              Logout
            </button>
          </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
