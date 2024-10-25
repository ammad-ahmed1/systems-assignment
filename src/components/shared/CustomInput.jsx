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
    <div className="mx-auto">
      <div className="text-left">
        <label className="text-left">{label}</label>
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
