import React from 'react';
import { ReactTyped } from "react-typed";
import video from '../../assets/videos/snooker.mp4';
import Shop from '../button/Shop';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
          MASTER YOUR GAME
        </h1>

        <div className="mt-4 text-4xl md:text-5xl font-bold text-yellow-500">
          <ReactTyped
            strings={["SNOOKER SITE Aamir", "SNOOKER SITE El Amiri"]}
            typeSpeed={100}
            backSpeed={50}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </div>

        <p className="mt-6 text-xl mb-10">Built For Snooker Enthusiasts!</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Shop />

          <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition duration-300">
            SNOOKER NEWS AND RESULTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
