import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="md:w-[80%] mx-auto text-center font-bold text-3xl md:text-4xl lg:text-6xl leading-tight  mt-20">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="md:w-[80%] mx-auto text-sm font-light text-center mt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="text-center mt-10">
          <button className="px-4 py-2 bg-white text-custom-purple rounded-lg border border-custom-purple shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <Link to="/dashboard">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
