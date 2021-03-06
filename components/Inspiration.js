import React from "react";
import Image from "next/image";
const Inspiration = ({ insp, setActiveDetailedInsp, setShowDetailedInsp }) => {
  const { category, categoryIcon } = insp;
  return (
    <div
      className="mb-7 flex items-center justify-between h-36 w-full px-20 py-9 bg-blue-postInsp rounded-lg text-lg
      text-gray-text outline-none cursor-pointer"
      onClick={() => {
        setShowDetailedInsp(true);
        setActiveDetailedInsp(`${category}`);
      }}
    >
      <div className="flex items-center">
        <div className=" flex items-center justify-center">
          <Image
            src={`${categoryIcon}`}
            alt={category}
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <span
          className="ml-16 text-xs text-black-analText"
          onClick={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp(`${category}`);
          }}
        >
          {category}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1656195114/InsoImages/arrow_forward_winp6p.svg"
          alt="arrow-right"
          layout="fixed"
          width="16"
          height="16"
        />
      </div>
    </div>
  );
};

export default Inspiration;
