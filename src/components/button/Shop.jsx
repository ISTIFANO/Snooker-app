import React from "react";

const Shop = (props) => {
  return (
    <button className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition duration-300">
   {props.value}
  </button>  
  );
};

export default Shop;
