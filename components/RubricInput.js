import Image from "next/image";
import React from "react";

const RubricInput = ({
  type,
  value,
  setValue,
  placeholder,
  required,
  disabled,
  handleKeyUp,
}) => {
  return (
    <div className="flex items-center h-27 w-300 pr-15 py-9 bg-blue-lightBlue rounded-lg text-md text-gray-text">
      <input
        type={type}
        placeholder={placeholder || "Enter"}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        required={required}
        disabled={disabled}
        onKeyUp={handleKeyUp}
        className=" h-full bg-transparent outline-none border-none text-xs
         focus:ring-0 text-black-postInsp"
      />
      <Image
        src="/icons/delete_green.svg"
        alt="back"
        layout="fixed"
        width="15"
        height="15"
      />
    </div>
  );
};

export default RubricInput;
