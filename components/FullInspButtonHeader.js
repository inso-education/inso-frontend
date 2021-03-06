import React from "react";

const FullInspButtonHeader = ({ activeInsp, setActiveInsp }) => {
  return (
    <div className="grid grid-cols-5 vp-600:grid-cols-3 my-20 ">
      <button
        className={`${
          activeInsp === "Post with"
            ? "btn-currentSection"
            : "btn-notCurrentSection"
        }`}
        onClick={() => setActiveInsp("Post with")}
      >
        Post with
      </button>
      <button className="border-b-2 border-other-disabled vp-600:hidden"></button>
      <button
        className={`${
          activeInsp === "Respond with"
            ? "btn-currentSection"
            : "btn-notCurrentSection"
        }`}
        onClick={() => setActiveInsp("Respond with")}
      >
        Respond with
      </button>
      <button className="border-b-2 border-other-disabled vp-600:hidden"></button>
      <button
        className={`${
          activeInsp === "Synthesize"
            ? "btn-currentSection"
            : "btn-notCurrentSection"
        }`}
        onClick={() => setActiveInsp("Synthesize")}
      >
        Synthesize
      </button>
    </div>
  );
};

export default FullInspButtonHeader;
