import React from "react";
import Heading from "./shared/Heading";
import Paragraph from "./shared/Paragraph";

const DigitalMarketingOverview = () => {
  const paragraphClasses = "text-p2 font-sans mb-[1.5em] ";
  return (
    <div className="flex flex-col sm:flex-row justify-between px-[20px] gap-8">
      <div className="w-full ">
        <Heading classNameProp={"text-h3 font-serif my-6 text-left"}>
          Maximise Your Online Impact
        </Heading>
        <Paragraph classNameProp={paragraphClasses}>
          Digital marketing has become an essential strategy for companies
          across all industries due to its effectiveness in reaching and
          engaging target audiences online. Digital marketing enables companies
          to extend their reach beyond local boundaries to a global audience.
          Digital marketing allows your company to target and connect with
          potential customers worldwide.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          Compared to traditional marketing methods, digital marketing offers
          more cost-effective solutions with a higher return on investment
          (ROI). Small businesses and startups can particularly benefit from
          digital marketing’s ability to reach a wide audience at a lower cost.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          As a digital marketing agency, we leverage data-driven strategies to
          enhance your brand’s online visibility, engage with your target
          market, and drive conversions.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          We craft bespoke digital marketing campaigns that align with your
          business goals, ensuring measurable results that contribute to your
          bottom line.{" "}
        </Paragraph>
      </div>
      <div className="w-full">
        <Heading classNameProp="text-h3 font-serif my-6 text-left">
          Comprehensive range of digital agency services
        </Heading>
        <Paragraph classNameProp={paragraphClasses}>
          SEO is crucial for improving your website’s visibility and ranking on
          search engine results pages (SERPs). Our SEO strategies are designed
          to increase organic traffic to your website by optimising content,
          building high-quality backlinks, and ensuring your site is technically
          flawless. With a focus on keyword research, on-page and off-page SEO,
          and user experience (UX) improvements, we aim to place your brand in
          front of your target audience at the right moment.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          Our website design service focuses on creating visually appealing,
          user-friendly websites that reflect your brand’s personality and
          values. By combining aesthetic design with functional simplicity, we
          ensure your site offers an exceptional user experience across all
          devices.
        </Paragraph>
        <Paragraph classNameProp={paragraphClasses}>
          We build websites that not only look great but also perform well,
          turning visitors into customers.
        </Paragraph>
      </div>
      <div></div>
    </div>
  );
};

export default DigitalMarketingOverview;
