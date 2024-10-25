import React from "react";
import { whyUsData } from "../../constants/data";
import Card from "../shared/Card";
import Heading from "../shared/Heading";
import Underline from "../shared/Underline";

const WhyUs = () => {
  return (
    <>
      <div className="flex flex-col justify-center pt-[80px] px-[40px] pb-[20px] mx-auto">
        <Heading
          classNameProp={"text-h3 font-serif text-enter mx-auto text-center"}
        >
          Why choose our digital agency?
        </Heading>
        <Underline />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 pt-[40px] px-[0px] lg:px-[20px] pb-[80px] max-w-[] mx-auto">
        {whyUsData.map((item, index) => (
          <div key={index} className="p-4">
            <Card
              image={item.image}
              heading={item.heading}
              paragraph={item.paragraph}
              headingStyle="text-h4 font-serif my-6"
              paragraphStyle="text-p2 font-sans my-6"
              padding="sm:px-2"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUs;
