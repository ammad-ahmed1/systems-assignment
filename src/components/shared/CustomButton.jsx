import React from 'react';

const Button = ({
  onClick,
  children,
  btnStyle = '', // Default to an empty string
  type = 'outlined', // Example type prop for styling
}) => {
  const baseStyles = `
    flex 
    justify-center 
    mx-auto 
    text-lg 
    tracking-wider 
    font-bold 
    uppercase 
    text-center 
    px-5 
    py-2
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
  const styles = type === 'filled' ? filledStyles : outlinedStyles;

  return (
    <button
      className={`${baseStyles} ${styles} ${btnStyle}`} // Combine styles
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
