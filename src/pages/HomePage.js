import React from 'react';
import { Link } from "react-router-dom";
import weighthero from '../images/weighthero.png';
import studentimg from '../images/studentimg.png'
import goldfit from '../images/goldfit.png'
import planetfit from '../images/planetfit.png'
import chuzefit from '../images/chuzefit.png'
import twofourfit from '../images/twofourfit.png'

export const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={weighthero}
          alt="hero-img"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content on top of the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            AFFORDABLE FITNESS MADE FOR STUDENTS
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center">
            All-in-one membership that gives you multiple access to gyms
          </p>

          {/* Search bar */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search for gyms near you"
              className="px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gradient-to-r from-gray-800 to-teal-500 text-white">
  
  {/* Left Image Section */}
  <div className="md:w- p-6 flex justify-center">
    <img 
      src={studentimg} 
      alt="Students working out" 
      className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96" 
    />
  </div>

  {/* Our Mission Text Section */}
  <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center p-10 text-center md:text-left">
    <h1 className="text-4xl font-bold pb-4 tracking-wide">
      Our Mission
    </h1>
    <p className="text-lg max-w-md mb-6 leading-relaxed">
      Our goal is to increase accessibility by offering exclusive discounts to students while helping fitness businesses reach a broader audience.
    </p>
    
    <ul className="text-md space-y-2 max-w-sm">
      <li className="flex items-center">
        <span className="text-green-200 mr-2">✓</span>
        Empowering students to stay fit affordably
      </li>
      <li className="flex items-center">
        <span className="text-green-200 mr-2">✓</span>
        Building partnerships with local fitness businesses
      </li>
      <li className="flex items-center">
        <span className="text-green-200 mr-2">✓</span>
        Enhancing student wellness through accessibility
      </li>
    </ul>

    <button className="mt-6 px-8 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
     <Link to="/about" className="hover:text-gray-400">
      Learn More
      </Link>
    </button>
  </div>
  
  </div>

  {/* Our Partners Section */}
<div className="bg-gray-100 py-8">
  <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>

  {/* Logo Scroll Container  */}
  <div className="  overflow-hidden whitespace-nowrap">
    <div className="inline-flex animate-scroll gap-8">
      
      {/* Example Logos */}
      <img src={goldfit} alt="Partner 1" className="h-16 w-auto object-contain" />
      <img src={chuzefit} alt="Partner 2" className="h-16 w-auto object-contain" />
      <img src={planetfit} alt="Partner 3" className="h-16 w-auto object-contain" />
      <img src={twofourfit} alt="Partner 4" className="h-16 w-auto object-contain" />


      <img src={goldfit} alt="Partner 1" className="h-16 w-auto object-contain" />
      <img src={chuzefit} alt="Partner 2" className="h-16 w-auto object-contain" />
      <img src={planetfit} alt="Partner 3" className="h-16 w-auto object-contain" />
      <img src={twofourfit} alt="Partner 4" className="h-16 w-auto object-contain" />

      <img src={goldfit} alt="Partner 1" className="h-16 w-auto object-contain" />
      <img src={chuzefit} alt="Partner 2" className="h-16 w-auto object-contain" />
      <img src={planetfit} alt="Partner 3" className="h-16 w-auto object-contain" />
      <img src={twofourfit} alt="Partner 4" className="h-16 w-auto object-contain" />

      <img src={goldfit} alt="Partner 1" className="h-16 w-auto object-contain" />
      <img src={chuzefit} alt="Partner 2" className="h-16 w-auto object-contain" />
      <img src={planetfit} alt="Partner 3" className="h-16 w-auto object-contain" />
      <img src={twofourfit} alt="Partner 4" className="h-16 w-auto object-contain" />

      <img src={goldfit} alt="Partner 1" className="h-16 w-auto object-contain" />
      <img src={chuzefit} alt="Partner 2" className="h-16 w-auto object-contain" />
      <img src={planetfit} alt="Partner 3" className="h-16 w-auto object-contain" />
      <img src={twofourfit} alt="Partner 4" className="h-16 w-auto object-contain" />
      
    </div>
  </div>
</div>



  {/* FAQ */}



    


    </>
  );
};
