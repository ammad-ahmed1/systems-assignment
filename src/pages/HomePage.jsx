import React from "react";
import Hero from "../components/homepage/Hero";
import Heading from "../components/shared/Heading";
import WeOffer from "../components/homepage/WeOffer";
import ContactUsForm from "../components/homepage/ContactUsForm";
import Services from "../components/homepage/Services";
import WhyUs from "../components/homepage/WhyUs";
import DigitalMarketingOverview from "../components/homepage/DigitalMarketingOverview";
import ContactUs from "../components/homepage/ContactUs";
import FAQs from "../components/homepage/FAQs";
import { CommaIcon } from "../icons";

const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <div>
          <Hero />
        </div>
        <div className="w-full md:w-50p mt-[150px] md:mt-[250px] px-7 md:px-0 py-0 mx-auto">
          <div className="relative">
            <CommaIcon />
            <div className="absolute top-[5px] bottom-0 left-0 right-0 px-4 py-2">
              <Heading classNameProp="text-h2 font-serif">
                Our digital agency will tailor marketing strategies to meet your
                unique business needs. Your digital transformation starts here!
              </Heading>
            </div>
          </div>
        </div>

        <div className="w-90p  mx-auto mt-[440px] md:mt-[300px]">
          <WeOffer />
        </div>
        <div>
          <ContactUsForm />
        </div>
        <div className="w-95p lg:w-90p mx-auto mt-[120px]">
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
      </div>
    </>
  );
};

export default HomePage;
