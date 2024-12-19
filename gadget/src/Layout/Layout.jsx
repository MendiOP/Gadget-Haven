import React from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";

const Layout = () => {
  return (
    <div className="font-sora">
      <header className="bg-custom-purple text-white h-[700px]">
        <Header></Header>
      </header>

      <main></main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
