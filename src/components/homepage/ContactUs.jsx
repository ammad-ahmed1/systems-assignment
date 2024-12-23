import React from "react";
import Heading from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/CustomButton";
import Underline from "../shared/Underline";

const ContactUs = () => {
  return (
    <div>
      <Heading classNameProp="text-h3 font-serif my-6 mb-[10px] text-center">
        Interested in finding out more?
      </Heading>
      <Underline />
      <div className="w-[30px] h-[10px] rounded-md bg-primary-500 "> </div>
      <Paragraph classNameProp="text-p2 mb-[1.5em] text-center">
        Contact us now to discover how we can transform your digital strategy
        and propel your business forward.
      </Paragraph>
      <div className="mx-auto">
        <Button
          onClick={() => console.log("Outlined Button Clicked")}
          btnStyle="mx-auto"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
