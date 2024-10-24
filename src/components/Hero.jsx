import React from "react";
import Heading from "./shared/Heading";
import Button from "./shared/CustomButton";

const Hero = () => {
  return (
    <div className="relative w-[100%] h-[500px]">
      {/* Image Section */}
      <div className="absolute inset-0 flex justify-end">
        <div className="bg-[url('/hero-img.jpg')] w-85p h-full bg-no-repeat bg-cover bg-right z-0"></div>
      </div>

      {/* Overlapping Div */}
      <div className="absolute top-[212%] sm:top-[12%] md:top-[12%] lg:top-[12%] left-20 z-10 w-[50%] p-[50px] pt-[50px] pb-[30px] pl-[50px] pr-[50px] -ml-5 border-r-2 border-customPrimary bg-white">
        <Heading classNameProp="text-h1 font-serif">
          A Reading based digital agency.
        </Heading>
        <div className="h-0.5 w-7 bg-customPrimary rounded-[8px] my-5"></div>
        <p className="text-p2 font-sans mb-[1.5em]">
          Our digital agency is passionate about transforming businesses through
          innovative web design, SEO & digital marketing strategies.
        </p>
        <div>
          <Button
            btnStyle=""
            type="filled"
            onClick={console.log("I am clicked")}
          >
            Get In Touch!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
