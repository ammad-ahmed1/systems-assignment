import React from "react";
import Heading from "../shared/Heading";
import Button from "../shared/CustomButton";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[500px] md:h-[500px]">
      <div className="absolute inset-0 flex justify-end">
        <div
          className="w-full md:w-[85%] sm:w-full h-[650px] bg-[url('/hero-img.jpg')] 
        bg-cover bg-center md:bg-right z-0"
        ></div>
      </div>
      <div
        className="relative md:absolute 
      bg-white/90 md:bg-white min-h-[400px] md:h-auto w-80p md:w-50p
      px-4 sm:px-6 md:px-8 py-8 md:py-16
       top-8 md:top-15 lg:top-20 left-0 md:left-20  
      z-10 
      border-r-0 md:border-r-2 border-customPrimary"
      >
        <div className="max-w-xl mx-auto md:mx-0">
          <Heading classNameProp="text-h1 font-serif">
            A Reading based digital agency.
          </Heading>

          <div className="h-0.5 w-7 bg-customPrimary rounded-[8px] my-4 md:my-5"></div>

          <p
            className="text-base text-p2 font-sans mb-6 md:mb-[1.5em]
          max-w-prose"
          >
            Our digital agency is passionate about transforming businesses
            through innovative web design, SEO & digital marketing strategies.
          </p>

          <div>
            <Button
              btnStyle=""
              type="filled"
              onClick={() => console.log("I am clicked")}
            >
              Get In Touch!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
