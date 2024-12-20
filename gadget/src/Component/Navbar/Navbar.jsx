import React from "react";
import { NavLink } from "react-router-dom";
import heart from "../../assets/heart.png";
import shoppingCart from "../../assets/shopping-cart.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/offers">Offers</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar w-5/6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-12">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <button>
          <img
            className="border border-gray-300 bg-white rounded-full p-2 w-10 h-10"
            src={shoppingCart}
            alt="Cart"
          />
        </button>
        <button>
          <img
            className="border border-gray-300 bg-white rounded-full p-2 w-10 h-10"
            src={heart}
            alt="Hate"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
