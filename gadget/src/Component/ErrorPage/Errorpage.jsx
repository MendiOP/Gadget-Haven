import React from "react";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <div className="text-center p-12 bg-white bg-opacity-80 shadow-2xl rounded-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-7xl font-extrabold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Oops! Page Not Found</p>
        <p className="mt-2 text-lg text-gray-500">
          The page you are looking for doesn't exist. You can return to the
          homepage or explore other sections.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
