import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GadgetList = () => {
  const [gadgets, setGadgets] = useState([]);
  const items = ["laptops", "smartphones", "cameras", "smartwatches"];

  const { category } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setGadgets(data);
      });
  }, []);

  const filteredGadgets =
    !category || category === "all" || !items.includes(category)
      ? gadgets
      : gadgets.filter(
          (gadget) => gadget.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredGadgets.map((gadget, index) => (
        <div
          key={index}
          className="card card-compact bg-white border border-gray-300 rounded-lg shadow-lg p-4"
        >
          <figure className="flex justify-center mb-4">
            <img
              className="w-40 h-40 object-cover border border-gray-200 rounded-lg"
              src={gadget.product_image}
              alt={gadget.product_title}
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg text-left font-semibold text-gray-800">
              {gadget.product_title}
            </h2>
            <p className="text-gray-600 text-left">Price: {gadget.price}</p>
            <div className="card-actions mt-4">
              <button className="px-6 py-2 bg-custom-purple text-white rounded-full hover:bg-purple-700 transition-all duration-200">
                <Link to={`/details/${gadget.product_id}`}>View Details</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GadgetList;
