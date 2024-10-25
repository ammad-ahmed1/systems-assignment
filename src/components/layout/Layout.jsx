import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen text-textColor">
        <Navbar />
        <main className="flex-grow py-4">{children}</main>
        <div className="max-w-[1200px] mx-auto px-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
