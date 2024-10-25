import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./CustomButton";

const Card = ({
  image,
  heading,
  padding,
  paragraph,
  headingStyle,
  paragraphStyle,
  isButton,
  btnLabel,
}) => {
  return (
    <div className={`${padding}`}>
      {image && <img src={image} />}

      <Heading classNameProp={headingStyle}>{heading}</Heading>
      <Paragraph classNameProp={paragraphStyle}>{paragraph}</Paragraph>
      {isButton && (
        <Button
          btnStyle="inline-flex py-[15px] px-[15px] bg-accent-3 text-white text-p2 no-underline"
          type="filled"
          onClick={console.log("I am clicked")}
        >
          {btnLabel}
        </Button>
      )}
    </div>
  );
};

export default Card;
