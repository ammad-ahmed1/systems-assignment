import React, { useState } from "react";
import CustomInput from "./shared/CustomInput";
import Button from "./shared/CustomButton";

const ContactUsForm = () => {
  const inputClass =
    "border border-[#888888] rounded-none p-3.5 w-full w-[250px] md:w-[450px] mx-automx-auto mb-6";
  const [name, setName] = useState("");

  return (
    <div className="bg-[url('/form-bg-img.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[59%] my-[160px] bg-white flex flex-col items-center p-10 border-t-2 border-customPrimary shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>

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
          isTextArea={true} // Reuse the same class for textarea
        />
        <div className="flex justify-start">
          <Button
            btnStyle=""
            type="filled"
            onClick={console.log("I am clicked")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
