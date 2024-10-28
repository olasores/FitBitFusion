import React from 'react';
import weighthero from '../images/weighthero.png';

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
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

    {/* Why us section */}
    


    </>
  );
};
