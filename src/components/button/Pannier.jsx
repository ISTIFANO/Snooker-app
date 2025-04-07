import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const Pannier = ({ totalPrice = "10.00" }) => {
  return (
    <div className="relative text-yellow-500 font-bold">
      <div className="relative">
        <p className="text-white font-bold">
          <FaShoppingBasket color="yellow" size={28} />
          ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default Pannier;
