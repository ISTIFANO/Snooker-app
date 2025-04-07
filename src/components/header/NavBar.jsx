import React from "react";
import logo from '../../assets/images/SnookerSiteLogo_-_Copy-removebg-preview.png';
import Pannier from '../button/Pannier';

const NavBar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="flex justify-between items-center w-full p-4">
          <img src={logo} className="h-24" alt="Snooker Site Logo" />

          <ul className="flex gap-8 mx-auto">
            <li><a href="/" className="uppercase  text-xl text-white font-bold hover:text-yellow">Home</a></li>
            <li><a href="/shop" className="uppercase  text-xl text-white font-bold hover:text-yellow">The Snooker Shop</a></li>
            <li><a href="/news" className="uppercase text-xl  text-white font-bold hover:text-yellow">Snooker News</a></li>
            <li><a href="/blog" className="uppercase  text-xl text-white font-bold hover:text-yellow">Break-Off Blog</a></li>
            <li><a href="/about" className="uppercase text-xl  text-white font-bold hover:text-yellow">About Us</a></li>
          </ul>
          <Pannier />
        </div>  
      </nav>
    </>
  );
};

export default NavBar;
