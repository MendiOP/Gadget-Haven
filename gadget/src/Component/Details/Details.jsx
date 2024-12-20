import React from "react";
import { Helmet } from "react-helmet";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import heart from "../../assets/heart.png";
import cart from "../../assets/shopping-cart.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Details = () => {
  const gadget = useLoaderData();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
          ))}
      </>
    );
  };

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!existingCart.find((item) => item.product_id === gadget.product_id)) {
      existingCart.push(gadget);
      localStorage.setItem("cart", JSON.stringify(existingCart));

      toast("🦄 Added To Cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.warn("🦄 Already in the Cart !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleWishList = () => {
    const existingWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    if (
      !existingWishList.find((item) => item.product_id === gadget.product_id)
    ) {
      existingWishList.push(gadget);
      localStorage.setItem("wishList", JSON.stringify(existingWishList));
      toast("🦄 Added To Wishlist", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.warn("🦄 Already in the Wishlist !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="bg-gray-300">
      <Helmet>
        <title>Item Details - Gadget-Heaven</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="text-center p-6 h-[500px] bg-custom-purple text-white">
        <h1 className="font-extrabold text-4xl ">Product Details</h1>
        <p className="w-[40%] mx-auto mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="md:w-[60%] mx-auto bg-white -mt-60 border p-3 rounded-xl border-white flex flex-row items-center justify-around space-y-3 gap-6 mb-10">
        <div className="w-[400px]">
          <img className="w-full" src={gadget.product_image} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{gadget.product_title}</h1>
          <p className="text-lg font-bold">Price: ${gadget.price}</p>
          <div className="px-4 py-2 text-center w-fit bg-green-200 rounded-full">
            <p>{gadget.availability ? "In Stock" : "Stock Out"}</p>
          </div>
          <p className="text-lg font-light">{gadget.description}</p>
          <p className="font-bold text-lg">Specification:</p>
          <ol start={1} className="list-decimal text-gray-600 font-light">
            {gadget.specification.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ol>

          <div className="flex items-center space-x-1">
            {renderStars(gadget.rating)}{" "}
            <p className="px-2 py-1 border border-gray-300 rounded-full bg-gray-200">
              {gadget.rating}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleAddToCart}
              className="flex items-center px-3 py-2 bg-custom-purple text-white rounded-full text-base font-semibold hover:bg-purple-700 hover:shadow-lg transition-all duration-200"
            >
              Add to Cart
              <img src={cart} alt="Cart Icon" className="ml-2 w-5 h-5" />
            </button>

            <button className="border border-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200">
              <img
                onClick={handleWishList}
                src={heart}
                alt="Heart Icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Details;
