import React from "react";

const Paragraph = ({
  fontSize = "text-base",
  className = "",
  fontFamily = "font-sans",
  lineHeight = "leading-normal",
  children,
  classNameProp
}) => {
  return (
    <p 
    // className={`${fontSize} ${fontFamily} ${lineHeight} ${className}`}
    className={classNameProp}
    >
      {children}
    </p>
  );
};

export default Paragraph;
