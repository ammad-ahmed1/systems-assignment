import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen text-textColor">
        <div className="sticky top-0 z-30 bg-white">
          {" "}
          <Navbar />
        </div>

        <main className="flex-grow py-4">{children}</main>
        <div className="w-90p mx-auto px-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
