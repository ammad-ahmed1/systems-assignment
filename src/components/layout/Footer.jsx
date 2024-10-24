import React from "react";
import { svgIcons } from "../../constants/data";

const Footer = () => {
  return (
    <div>
      <img
        src="https://webmomentum.co.uk/digital-marketing-reading-img/2024/02/cropped-web-momentum.png"
        alt="Web Momentum Logo"
        className="mx-auto h-14 my-4"
      />
      <p className="text-[18px] text-center ">Digital Marketing Agency</p>
      <div className="flex justify-center space-x-4">
        {svgIcons.map((icon) => (
          <div key={icon.key} className="my-20">
            {icon}
          </div>
        ))}
      </div>
      <div className="border-b-2 border-gray-300 w-full "></div>
      <div className="flex flex-col md:flex-row justify-between items-center my-[60px] px-0 gap-y-7 gap-x-5">
        <p className="text-sm ">WEB MOMENTUM</p>
        <p className="text-sm ">PRIVACY POLICY</p>
      </div>
    </div>
  );
};

export default Footer;
