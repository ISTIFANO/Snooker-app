import React from "react";
import logo from '../../assets/images/SnookerSiteLogo_-_Copy-removebg-preview.png';

const NavBar = () => {
  return (
    <>
<nav class="bg-black">

    <div class="flex gap-24 items-center">
    <img src={logo} class=" h-24 p-4" alt="Snooker Site Logo" />

    <i class="uppercase text-white font-bold hover:text-yellow">Home</i>
<i class="uppercase text-white font-bold hover:text-yellow">The Snooker Shop</i>
<i class="uppercase text-white font-bold hover:text-yellow">Snooker News</i>
<i class="uppercase text-white font-bold hover:text-yellow">Break-Off Blog</i>
<i class="uppercase text-white font-bold hover:text-yellow">About Us</i>


    </div>

</nav>


    </>
  );
};

export default NavBar;
