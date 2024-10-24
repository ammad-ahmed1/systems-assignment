import React from "react";

const CustomInput = ({
  label,
  value,
  setValue,
  onChange,
  isTextArea,
  classNameProp,
}) => {
  return (
    <div>
      <div className="">
        <label>{label}</label>
      </div>
      {isTextArea ? (
        <textarea
          value={value}
          onChange={onChange}
          rows="5" // You can adjust this value to increase or decrease the height
          className={classNameProp}
        ></textarea>
      ) : (
        <input value={value} onChange={onChange} className={classNameProp} />
      )}
    </div>
  );
};

export default CustomInput;
