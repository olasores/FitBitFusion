import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
// Uncomment if you have a logo
// import logo from '../path/to/logo.png'; 

export const NavBar = () => {
  return (
    <nav className=" bg-gradient-to-r from-gray-800 to-teal-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white flex items-center font-bold text-xl">
          {/* If you have a logo, use this */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 " />
          </Link>
          <Link to="/" className="ml-4">FITBITFUSION</Link>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          {/* add log in and sign up button here */}
        </ul>


      {/* Login and Signup button  */}
        <div className=" flex space-x-5">
        <button className="px-4 py-2 bg-teal-100 rounded-lg">
          Login
        </button>
        <button className="px-3 py-3 bg-teal-100  rounded-lg">
          Sign Up
        </button>
        </div>

       

      </div>
    </nav>
  );
};
