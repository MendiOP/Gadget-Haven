import React from "react";
import bkash from "../../assets/bkash-cashback-400x400.webp";
import dell from "../../assets/dell-winter-offer-00-400x400.webp";
import nagad from "../../assets/nagad-cashback-01-400x400.webp";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Offers = () => {
  return (
    <div className="font-sora bg-gray-300">
      <Navbar />

      <div className="text-center p-6 h-[200px] bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-b-lg">
        <h1 className="font-extrabold text-4xl">Exclusive Offers</h1>
        <p className="w-[60%] mx-auto mt-4 text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Offer Card 1 */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 bg-white">
          <img
            src={bkash}
            alt="Bkash Offer"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-3">10-12-2024 to 31-12-2024</p>
          <h2 className="text-xl font-bold mt-2">Unlimited Shopping!!</h2>
          <p className="text-sm text-gray-600 mt-2">
            Get 10% cashback on your purchase using Bkash wallet.
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200">
            <a href="https://www.startech.com.bd/laptop-mela">View Details</a>
          </button>
        </div>

        {/* Offer Card 2 */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 bg-white">
          <img
            src={nagad}
            alt="Nagad Offer"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-3">20-12-2024 to 30-12-2024</p>
          <h2 className="text-xl font-bold mt-2">
            Nagad Instant CashBack Offer!
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Pay with Nagad & Enjoy 10% Instant Cashback!
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200">
            <a href="https://www.startech.com.bd/information/offer/info?offer_id=1180">
              View Details
            </a>
          </button>
        </div>

        {/* Offer Card 3 */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 bg-white">
          <img
            src={dell}
            alt="Dell Laptop Mela"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-3">10-10-2024 to 21-12-2024</p>
          <h2 className="text-xl font-bold mt-2">Dell Laptop Mela!</h2>
          <p className="text-sm text-gray-600 mt-2">
            Buy Dell Inspiron Series Laptop & Get Exciting Discount!
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200">
            <a href="https://www.startech.com.bd/information/offer/info?offer_id=1190">
              View Details
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;
