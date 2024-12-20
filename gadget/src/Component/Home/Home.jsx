import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CategoryList from "./CategoryList";

const Home = () => {
  return (
    <div className="font-sora bg-gray-300">
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      <header className="bg-custom-purple text-white h-[700px]">
        <Header />
      </header>

      <main>
        <div className="md:w-[60%] mx-auto bg-white bg-opacity-30 -mt-60 border p-3 rounded-xl border-white">
          <img className="h-[550px] w-full object-cover" src={banner} alt="" />
        </div>

        <div className="flex md:w-[60%] mx-auto mt-10 mb-10 space-x-4 ">
          {/* Sidebar */}
          <div className="w-1/4">
            <CategoryList />
          </div>

          {/* Main content (Nested Outlet) */}
          <div className="w-3/4">
            <Outlet />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
