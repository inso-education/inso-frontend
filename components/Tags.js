import React from "react";
import Image from "next/image";

const Tags = ({ setViewInspirations }) => {
  return (
    <div className="">
      <div
        className="px-45 flex items-center cursor-pointer  "
        onClick={() => setViewInspirations(false)}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/arrow_left_green.svg"
            alt="back"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6 className="ml-16 text-gray-faintGray">Back</h6>
      </div>
      <h5 className="px-45 my-17 text-black-analText">Popular tags</h5>

      <div className=" bg-gray-createDisc py-10 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className="  text-black-analText  mb-28">
          Analyse this chart to gain insights on how tags are used and how
          frequently they are used.
        </h5>
        <p className=" text-primary-darkGreen mb-7">Chart</p>
        <div>
          <Image
            src="/illustrations/Thread_chart.svg"
            alt="cancel"
            layout="fixed"
            width="120"
            height="120"
          />
        </div>
        <p className=" text-primary-darkGreen mb-7">Headers and prompts</p>
        <h5 className="  text-black-analText w-11/12 ">Summary</h5>
        <p className=" text-border-dropdownLine">
          Summarize your synthesis from the chart above
        </p>
      </div>
    </div>
  );
};

export default Tags;
