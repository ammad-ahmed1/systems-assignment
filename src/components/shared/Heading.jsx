import React from "react";

const Heading = ({
  classNameProp,

  children,
}) => {
  return <h1 className={classNameProp}>{children}</h1>;
};

export default Heading;
