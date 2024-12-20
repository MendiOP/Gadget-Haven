import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-white p-10 space-y-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Gadget Heaven</h1>
        <p className="text-sm font-light">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr />
      <div className="flex flex-row justify-between md:w-[70%] mx-auto mt-5">
        <div>
          <h1 className="font-semibold text-2xl">Services</h1>
          <ul className="font-light">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-2xl">Company</h1>
          <ul className="font-light">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-2xl">Services</h1>
          <ul className="font-light">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
