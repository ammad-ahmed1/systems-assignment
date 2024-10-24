import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQs from "../FAQs";
import ContactUs from "../ContactUs";
import DigitalMarketingOverview from "../DigitalMarketingOverview";
import WhyUs from "../WhyUs";
import Services from "../Services";
import WeOffer from "../WeOffer";
import Heading from "../shared/Heading";
import ContactUsForm from "../ContactUsForm";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="w-full ">
        <Heading classNameProp="text-h2 font-serif my-6 text-left px-4 sm:px-6 md:px-10 lg:px-[350px]">
          Our digital agency will tailor marketing strategies to meet your
          unique business needs. Your digital transformation starts here!
        </Heading>

        <div className="w-90p mx-auto">
          <WeOffer />
        </div>
        <div>
          <ContactUsForm />
        </div>
        <div className="w-90p mx-auto mt-[120px]">
          <Services />
        </div>
        <div className="bg-gradient-to-br from-[#cfdae6]/40 to-[#ffffff]  mt-[100px] py-[60px] px-[0px]">
          <WhyUs />
        </div>
        <div className="w-90p mx-auto mt-[120px] sm:mt-[60px] mb:[60px]">
          <DigitalMarketingOverview />
        </div>
        <div className="bg-gradient-to-br from-[#cfdae6]/40 to-[#ffffff] py-20 px-5 ">
          <ContactUs />
        </div>
        <div className="bg-customGray mt-[100px]">
          <FAQs />
        </div>
        <div className="max-w-[1200px] mx-auto px-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
