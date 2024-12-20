import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = [
    "All",
    "Laptops",
    "SmartPhones",
    "Cameras",
    "Smartwatches",
  ];

  // State to keep track of the active category
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="mt-10 space-y-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`p-3 rounded-lg font-medium cursor-pointer transition ${
              activeCategory === category
                ? "bg-custom-purple text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <Link to={`/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
