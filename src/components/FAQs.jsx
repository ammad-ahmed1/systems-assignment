import React from "react";
import { faqsData } from "../constants/data";
import Card from "./shared/Card";

const FAQs = () => {
  return (
    <div className="flex flex-wrap justify-center pt-[100px] px-[20px] pb-[80px] w-90p mr-auto ml-auto">
      {faqsData.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2  p-4">
          {" "}
          {/* Responsive grid layout */}
          <Card
            image={item.image}
            heading={item.heading}
            paragraph={item.paragraph}
            headingStyle="text-h2 font-serif my-6"
            paragraphStyle="text-p2 font-serif my-6"
            padding=" sm:px-2 "
          />
        </div>
      ))}
    </div>
  );
};

export default FAQs;
