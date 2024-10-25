import React, { useState } from "react";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/CustomButton";

const ContactUsForm = () => {
  const inputClass =
    "border border-[#888888] rounded-none p-3.5 w-[200px] md:w-[340px] lg:w-[400px] md:w-[200px] mb-6 bg-customGray";
  const labelClass = "mx-auto text-left";
  const [name, setName] = useState("");

  return (
    <div className="bg-[url('/form-bg-img.jpg')] bg-cover bg-center py-[120px] w-full flex flex-col justify-center items-center">
      <div className="bg-white py-[30px] px-[25px] md:px-[180px] border-t-2 border-customPrimary rounded-lg shadow-md">
        <div className="px-auto">
          <h2 className="text-h2 text-center">Contact Us</h2>
          <div className="h-0.5 w-7 bg-customPrimary rounded-[8px] my-4 md:my-5"></div>
          <CustomInput
            value={name}
            label={"First name"}
            onChange={(e) => setName(e.target.value)}
            classNameProp={inputClass}
          />
          <CustomInput
            value={name}
            label={"Contact Email"}
            onChange={(e) => setName(e.target.value)}
            classNameProp={inputClass}
          />
          <CustomInput
            value={name}
            label={"Contact Number"}
            onChange={(e) => setName(e.target.value)}
            classNameProp={inputClass}
          />
          <CustomInput
            value={name}
            label={"Your Enquiry"}
            onChange={(e) => setName(e.target.value)}
            classNameProp={inputClass}
            isTextArea={true}
          />
          <div className="w-[200px] mt-4">
            <Button
              btnStyle=""
              type="filled"
              onClick={() => console.log("I am clicked")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
