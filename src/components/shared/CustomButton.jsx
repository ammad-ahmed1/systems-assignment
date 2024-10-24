import React from "react";

const Button = ({ onClick, children, btnStyle = "", type = "outlined" }) => {
  const baseStyles = `
    flex 
   
    text-lg 
    tracking-wider 
    font-bold 
    text-p1
    tracking-tight
    // text-center 
    px-5 
    py-4
  `;

  const outlinedStyles = `
    border-2 
    border-customPrimary 
    bg-transparent 
    text-customPrimary 
    hover:bg-customPrimary/10 
    rounded-btnRadius
  `;

  const filledStyles = `
    bg-customPrimary 
    text-white 
    hover:bg-customPrimary/80 
    rounded-btnRadius
  `;

  // Choose styles based on the type prop
  const styles = type === "filled" ? filledStyles : outlinedStyles;

  return (
    <button className={`${baseStyles} ${styles} ${btnStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
