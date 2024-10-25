import React from "react";
import Heading from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import { faqsData } from "../../constants/data";
import Button from "../shared/CustomButton";

const Services = () => {
  const paragraphClasses = "text-p2 font-sans mb-[1.5em] color-red-500";
  return (
    <div className="flex flex-col lg:flex-row  justify-between px-[0px] md:px-[20px] gap-8 sm:gap-2">
      <div>
        <Heading classNameProp={"text-h3 font-serif my-6 text-left"}>
          Digital agency services for small businesses
        </Heading>
        <Paragraph classNameProp={paragraphClasses}>
          Your small business needs more than just a product or service to
          offer; it needs a voice. That’s where we come in. At Web Momentum, we
          specialise in giving small businesses like yours the spotlight they
          deserve through comprehensive services tailored to meet your unique
          needs and objectives.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          Our team dedicates time to understanding your market, your brand, and
          your goals to craft a bespoke digital marketing strategy that aligns
          with your business values and targets your audience effectively.
        </Paragraph>
        <Heading classNameProp={"text-h3 font-serif my-6 text-left"}>
          Digital agency cost
        </Heading>
        <Paragraph classNameProp={paragraphClasses}>
          Our digital agency is committed to providing you with the maximum
          return on your investment by leveraging industry-leading strategies
          and innovative solutions.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          We prioritise comprehensive strategic planning and targeted execution
          to ensure that every aspect of your marketing budget is utilised
          efficiently and effectively. By focusing on the metrics that matter,
          we drive measurable results that not only meet but exceed your
          business goals.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          Whether you’re looking to increase brand awareness, drive more
          traffic, or generate higher conversions, our approach is designed to
          deliver sustainable growth and long-term success for your business.
        </Paragraph>
      </div>
      <div>
        <img src={faqsData[0].image} />
        <Heading classNameProp={"text-h3 font-serif my-6 text-left"}>
          Our digital agency
        </Heading>
        <Paragraph classNameProp={paragraphClasses}>
          We’re passionate about helping small businesses thrive in the digital
          landscape. Our services are designed to attract, engage, and convert
          your target audience, driving growth and success for your business.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          Ready to take your digital presence to the next level? Contact us
          today to learn how we can help you achieve your marketing goals.
        </Paragraph>
        <Button
          btnStyle="inline-flex py-[25px] px-[20px] bg-accent-3 text-white no-underline"
          type="filled"
          onClick={console.log("I am clicked")}
        >
          Get In Touch!
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default Services;
