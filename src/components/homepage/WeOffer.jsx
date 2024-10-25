import React from "react";
import { weOffer } from "../../constants/data";
import Card from "../shared/Card";

const WeOffer = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-8">
      {weOffer.map((item, index) => (
        <div key={index} className=" p-4">
          {/* Responsive grid layout */}
          <Card
            heading={item.heading}
            paragraph={item.paragraph}
            headingStyle="text-h3 font-san my-6"
            paragraphStyle="text-p2 font-san my-6"
            padding="sm:px-2"
            isButton={true}
            btnLabel={item.btnLabel}
          />
        </div>
      ))}
    </div>
  );
};

export default WeOffer;
