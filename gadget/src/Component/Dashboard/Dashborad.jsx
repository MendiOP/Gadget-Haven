import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem(
      activeButton === "cart" ? "cart" : "wishList"
    );
    setCart(JSON.parse(items) || []);
  }, [activeButton]);

  useEffect(() => {
    const newTotalCost = cart.reduce((total, item) => total + item.price, 0);
    setTotalCost(newTotalCost);
  }, [cart]);

  const handleCart = () => {
    setActiveButton("cart");
  };

  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
    localStorage.removeItem("cart");
    setCart([]);
    setTotalCost(0);
  };

  const handleWishlist = () => {
    setActiveButton("wishlist");
  };

  return (
    <div className="font-sora bg-gray-200">
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="mb-10">
        <div className="bg-custom-purple text-white p-10 text-center">
          <h1 className="font-extrabold text-4xl">Dashboard</h1>
          <p className="font-light text-normal mt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-4 mt-4">
            <button
              className={`border  px-4 py-2 w-[140px] rounded-full mt-4 ${
                activeButton === "cart" ? "bg-white text-black" : ""
              }`}
              onClick={handleCart}
            >
              Cart
            </button>
            <button
              className={`border px-4 py-2 w-[140px] rounded-full mt-4 ${
                activeButton === "wishlist" ? "bg-white text-black" : ""
              }`}
              onClick={handleWishlist}
            >
              Wishlist
            </button>
          </div>
        </div>

        {activeButton === "cart" && (
          <>
            <div className="w-5/6 mx-auto p-6 mt-10 rounded-lg flex flex-row items-center justify-between">
              <h1 className="text-3xl font-bold mt-4">Cart</h1>
              <div className="flex flex-row items-center space-x-2">
                <p className="font-bold text-2xl">
                  Your total Cost is: {totalCost}
                </p>
                <button
                  onClick={handleSort}
                  className="border border-custom-purple text-custom-purple px-4 py-2 rounded-full transition-colors duration-300 hover:bg-custom-purple hover:text-white active:bg-purple-800"
                >
                  Sort by Price
                </button>
                <button
                  onClick={() => handlePurchase()}
                  disabled={cart.length === 0 || totalCost === 0} // Disable button if cart is empty or total cost is 0
                  className="border border-custom-purple bg-custom-purple text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-purple-800 active:bg-purple-900"
                >
                  Purchase
                </button>
              </div>
            </div>

            <div>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white flex gap-10 flex-row items-center rounded-xl space-x-7 w-[60%] mx-auto mt-4"
                  >
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-32 h-32 object-cover rounded-xl"
                    />
                    <div className="space-y-5">
                      <h1 className="text-xl font-bold">
                        {item.product_title}
                      </h1>
                      <p className="font-light text-sm">{item.description}</p>
                      <p className="font-bold">Price: {item.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {activeButton === "wishlist" && (
          <>
            <div>
              {cart.length === 0 ? (
                <p>Your Wishlist is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white flex gap-10 flex-row items-center rounded-xl space-x-7 w-[60%] mx-auto mt-4"
                  >
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-32 h-32 object-cover rounded-xl"
                    />
                    <div className="space-y-5">
                      <h1 className="text-xl font-bold">
                        {item.product_title}
                      </h1>
                      <p className="font-light text-sm">{item.description}</p>
                      <p className="font-bold">Price: {item.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations!</h3>
          <p className="py-4">
            Your purchase has been successful. Thank you for shopping with us!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => navigate("/", { replace: true })}
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
